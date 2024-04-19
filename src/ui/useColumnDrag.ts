import { useRef, useLayoutEffect, useEffect, useMemo, useState } from "react";
interface State {
  target: HTMLElement | null;
  originIconX: number;
  originIconW: number;
  originThX: number;
  curThIdx: number;
  thCount: number;
  tbpW: number;
  tbW: number;
  tbH: number;
  tbodyT: number;
  line: HTMLElement | null;
}
const createLine = () => {
  const line = document.createElement("div")
  line.style.position = "fixed";
  line.style.width = "1px";
  line.style.borderLeft = "1px dashed rgba(0, 10, 17, 0.36)";
  return line
}

const createColumns = (columns: any[]) => {
  return {
    dragging: false,
    tableWidth: "100%",
    columns: columns.map(col => {
      return {
        width: !col.width || col.width === "auto" ? undefined : col.width,
      }
    })
  }
}
export default function useColumnDrag(columns: any[], tableRef: React.RefObject<HTMLTableSectionElement>) {
  const [dragState, setDragState] = useState(() => createColumns(columns))
  const stateRef = useRef<State>({
    target: null,
    originIconX: 0,
    originIconW: 0,
    originThX: 0,
    curThIdx: 0,
    thCount: 0,
    tbpW: 0,
    tbW: 0,
    tbH: 0,
    tbodyT: 0,
    line: createLine(),
  });
  const onMousemove = (e: MouseEvent) => {
    console.log(e)
    if (stateRef.current) {
      if (stateRef.current.line && stateRef.current.target) {
        const rect = stateRef.current.target.getBoundingClientRect()
        const diff = e.clientX - stateRef.current.originIconX
        let curW = stateRef.current.originThX + diff
        curW = Math.max(curW, 20)
        
        stateRef.current.line.style.left = `${rect.left + rect.width / 2}px`

        setDragState?.(prev => {
          // const widths = prev.columns.reduce((pre, cur) => (pre + cur.width), 0)
          // const greater = widths > stateRef.current.tbpW
          const columns = prev.columns
          const state = stateRef.current
          return {
            ...prev,
            tableWidth: Math.max(state.tbW + diff, stateRef.current.tbpW)  + "px",
            columns: columns.map((val, i) => {
              if (i === stateRef.current.curThIdx) {
                return {
                  ...val,
                  width: curW + 'px'
                }
              }
              return val
            })
          }
        })
      }
    }
  }
  const onMousedown = (e: MouseEvent) => {
    let target = e.target as HTMLElement
    console.log(e)
    if (target.parentElement?.classList.contains("table-drag__icon")) {
      target = target.parentElement as HTMLElement
    }
    const rect = target.getBoundingClientRect()
    stateRef.current.target = target
    if (target.classList.contains("table-drag__icon")) {
      stateRef.current.originIconX = e.clientX
      stateRef.current.originIconW = target.clientWidth
      
      let curTh = target
      while (curTh?.tagName !== "TH") {
        curTh = curTh.parentElement as HTMLElement
      }
      console.log(curTh.getBoundingClientRect())
      stateRef.current.originThX = curTh.clientWidth

      let tr = curTh
      while (tr?.tagName !== "TR") {
        tr = tr.parentElement as HTMLElement
      }
      const children = Array.from(tr?.children)
      stateRef.current.thCount = children.length

      const index = children.findIndex(f => f === curTh)
      stateRef.current.curThIdx = index

      let table = tr
      while(table?.tagName !== "TABLE") {
        table = table?.parentElement as HTMLElement
      }
      stateRef.current.tbW = table?.clientWidth
      stateRef.current.tbH = table?.clientHeight

      let tableParent = table.parentNode as HTMLElement
      stateRef.current.tbpW = tableParent?.clientWidth

      let tbody = table.querySelector("tbody")

      if (stateRef.current.line && tbody) {
        document.body.appendChild(stateRef.current.line)
        
        const tbodyRect = tbody.getBoundingClientRect()
        stateRef.current.line.style.display = "block"
        stateRef.current.line.style.top = `${tbodyRect.top}px`
        stateRef.current.line.style.left = `${rect.left + rect.width / 2}px`
        stateRef.current.line.style.height = `${tbody.clientHeight}px`
      }
      document.body.addEventListener("mousemove", onMousemove, false)
    }
  }
  const onMouseup = (e: MouseEvent) => {
    if (stateRef.current.line) {
      stateRef.current.line.style.display = "none"
    }
    document.body.removeEventListener("mousemove", onMousemove, false)
  }

  useEffect(() => {
    document.body.addEventListener("mousedown", onMousedown, false)
    document.body.addEventListener("mouseup", onMouseup, false)

    return () => {
      document.body.removeEventListener("mousedown", onMousedown, false)
      document.body.removeEventListener("mouseup", onMouseup, false)
    }
  }, [])

  useLayoutEffect(() => {
    // 初始化TABLE宽度
    // const tw = tableRef.current?.clientWidth
    // console.log(tw)
    // const cols = tableRef.current?.querySelectorAll("colgroup col")
    // console.log(cols)
    // setDragState?.(prev => ({
    //   ...prev,
    //   tbW: tw + "px",
    //   columns: Array.from(cols || [])?.map(col => {
    //     return {
    //       width: col.clientWidth + "px"
    //     }
    //   })
    // }))
  }, [])
  console.log(dragState.columns)
  console.log(dragState.tableWidth)
  return dragState
}
