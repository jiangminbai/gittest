import { useRef, useLayoutEffect, useEffect, useMemo, useState } from "react";
interface State {
  originIconX: number;
  originThX: number;
  curThIdx: number;
  thCount: number;
  tbpW: number;
  tbW: number;
  // tb: HTMLElement | null;
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
    originIconX: 0,
    originThX: 0,
    curThIdx: 0,
    thCount: 0,
    tbpW: 0,
    tbW: 0,
  });
  const onMousemove = (e: MouseEvent) => {
    if (stateRef.current) {
      const diff = e.clientX - stateRef.current.originIconX
      console.log(diff)
      setDragState?.(prev => {
        const widths = prev.columns.reduce((pre, cur) => (pre + cur.width), 0)
        const greater = widths > stateRef.current.tbpW
        const columns = prev.columns
        const state = stateRef.current
        return {
          ...prev,
          tableWidth: Math.max(state.tbW + diff, stateRef.current.tbpW)  + "px",
          columns: columns.map((val, i) => {
            let curW = stateRef.current.originThX + diff
            if (i === stateRef.current.curThIdx) {
              return {
                ...val,
                width: (curW > 20 ? curW : 20) + 'px'
              }
            }
            return val
          })
        }
      })
    }
  }
  const onMousedown = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    console.log(target.className)
    if (target.classList.contains("table-drag__icon") || target.parentElement?.classList.contains("table-drag__icon")) {
      stateRef.current.originIconX = e.clientX
      
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
      console.log(stateRef.current.tbW)
      let tableParent = table.parentNode as HTMLElement
      stateRef.current.tbpW = tableParent?.clientWidth
      document.body.addEventListener("mousemove", onMousemove, false)
    }
  }
  const onMouseup = (e: MouseEvent) => {
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