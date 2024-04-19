import { useLayoutEffect, useMemo, useRef, useState } from "react";

interface ColProps {
  width?: string | "auto";
}
interface ColGroupProps {
  values: any[];
}
export default function ColGroup (props: React.PropsWithChildren<ColGroupProps>) {
  const {values} = props
  // const [tableWidth, setTableWidth] = useState(0)
  // const [w, setW] = useState<{width?: string}[]>([])
  // const ref = useRef<HTMLTableColElement>(null)

  const cols = useMemo<ColProps[]>(() => {
    return values.map((col, index) => {
      return {
        width: col.width || "auto"
      }
    })
  }, [values])

  // useLayoutEffect(() => {
  //   // 初始化TABLE宽度
  //   let el: HTMLElement | null = ref.current
  //   while(el?.tagName !== "TABLE") {
  //     el = el?.parentElement as HTMLElement
  //   }
  //   const tw = el?.clientWidth
  //   el.style.width = `${tw}px`
  //   const cols = ref?.current?.children
  //   setW(Array.from(cols as HTMLCollectionOf<HTMLTableColElement>).map(col => {
  //     return {
  //       width: col.clientWidth + "px"
  //     }
  //   }))
  // }, [])
  return (
    <colgroup>
      {
        cols.map((col, index) => {
          return (
            <col key={index} width={col.width} />
          )
        })
      }
    </colgroup>
  )
}