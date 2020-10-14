import createDOMElement from './createDOMElement'
import mountElement from './mountElement'

export default function mountNativeElement(virtualDOM, container) {
  let newElement = createDOMElement(virtualDOM)

  // 将转换后的DOM对象插入到页面中
  container.appendChild(newElement)
}
