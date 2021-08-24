(this["webpackJsonp@uiw/react-baidu-map"]=this["webpackJsonp@uiw/react-baidu-map"]||[]).push([[49],{1075:function(n,t,e){"use strict";e.r(t),t.default="Control \u81ea\u5b9a\u4e49\u63a7\u4ef6\n===\n\n\u60a8\u53ef\u4ee5\u901a\u8fc7\u6b64\u7ec4\u4ef6\u6765\u5b9e\u73b0\u81ea\u5b9a\u4e49\u63a7\u4ef6\u3002\u540c\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528 `Map` \u7ec4\u4ef6 `widget` \u5c5e\u6027\u6765\u66f4\u65b9\u4fbf\uff0c\u8bbe\u7f6e\u81ea\u5e26\u9ed8\u8ba4\u63a7\u4ef6\u3002\n\n```jsx\nimport { Control, useControl } from '@uiw/react-baidu-map';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, Control, APILoader } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const [count, setCount] = useState(0);\n  const map = useRef(null);\n  return (\n    <Map zoom={13} ref={map}>\n      <Control\n        ref={(instance) => {\n          if (instance && instance.control) {\n            instance.control.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);\n          }\n        }}\n      >\n        <div\n          style={{ background: 'gray', padding: '10px', fontSize: 12 }}\n          onClick={() => setCount(count + 1)}\n        >\n          Current Count: {count}\n        </div>\n      </Control>\n      <Control anchor={BMAP_ANCHOR_TOP_RIGHT}>\n        <div\n          style={{ background: 'gray', padding: '10px', fontSize: 12, display: 'inline-block' }}\n          onClick={() => {\n            const instanceMap = map.current.map\n            if (instanceMap) {\n              instanceMap.setZoom(instanceMap.getZoom() + 2);\n            }\n          }}\n        >\n          \u653e\u59272\u7ea7\n        </div>\n        <div\n          style={{ background: 'gray', padding: '10px', fontSize: 12, display: 'inline-block', color: '#fff' }}\n          onClick={() => {\n            const instanceMap = map.current.map\n            if (instanceMap) {\n              instanceMap.setZoom(instanceMap.getZoom() - 2);\n            }\n          }}\n        >\n          \u7f29\u5c0f2\u7ea7\n        </div>\n      </Control>\n    </Map>\n  );\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '350px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u4f7f\u7528 hooks\n\n`portal`, `setPortal`, `control`, `setControl`\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport { useRef, useEffect, useState } from 'react';\nimport { Map, APILoader, useMap, useControl } from '@uiw/react-baidu-map';\n\nconst Example = () => {\n  const divElm = useRef(null);\n  const [count, setCount] = useState(0);\n  const { setContainer, map, setMap } = useMap({ widget: ['NavigationControl'], enableScrollWheelZoom: true });\n  useEffect(() => {\n    if (divElm.current && !map) {\n      setContainer(divElm.current);\n    }\n  }, [map]);\n  const children = (\n    <div style={{ background: 'gray', padding: '10px' }}>\n      <button\n        onClick={() => {\n          setCount(count + 1);\n          map.setZoom(map.getZoom() + 2);\n        }}\n      >\n        \u653e\u59272\u7ea7 {count}\n      </button>\n    </div>\n  )\n  const { portal } = useControl({ map, children, anchor: BMAP_ANCHOR_TOP_RIGHT });\n  return (\n    <>\n      <div ref={divElm} style={{ height: '100%' }} />\n      {portal}\n    </>\n  )\n}\n\nconst Demo = () => (\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| anchor | \u63a7\u4ef6\u7684\u505c\u9760\u4f4d\u7f6e\u3002| `ControlAnchor` | `BMAP_ANCHOR_TOP_LEFT` |\n| offset | \u63a7\u4ef6\u7684\u4f4d\u7f6e\u504f\u79fb\u503c\u3002 | `BMap.Size` | `new BMap.Size(10, 10)` |\n\n### ControlAnchor\n\n\u6b64\u5e38\u91cf\u8868\u793a\u63a7\u4ef6\u7684\u5b9a\u4f4d\u3002\n\n| \u5e38\u91cf | \u503c | \u63cf\u8ff0 |\n| ----- | ----- | ----- |\n| BMAP_ANCHOR_TOP_LEFT | `0` | `\u2196` \u63a7\u4ef6\u5c06\u5b9a\u4f4d\u5230\u5730\u56fe\u7684\u5de6\u4e0a\u89d2 |\n| BMAP_ANCHOR_TOP_RIGHT | `1` | `\u2197` \u63a7\u4ef6\u5c06\u5b9a\u4f4d\u5230\u5730\u56fe\u7684\u53f3\u4e0a\u89d2 |\n| BMAP_ANCHOR_BOTTOM_LEFT | `2` | `\u2199` \u63a7\u4ef6\u5c06\u5b9a\u4f4d\u5230\u5730\u56fe\u7684\u5de6\u4e0b\u89d2 |\n| BMAP_ANCHOR_BOTTOM_RIGHT | `3` | `\u2198` \u63a7\u4ef6\u5c06\u5b9a\u4f4d\u5230\u5730\u56fe\u7684\u53f3\u4e0b\u89d2 |\n"}}]);
//# sourceMappingURL=49.03fa948a.chunk.js.map