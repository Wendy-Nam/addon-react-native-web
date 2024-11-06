(self.webpackChunk_storybook_addon_react_native_web=self.webpackChunk_storybook_addon_react_native_web||[]).push([[6953],{"./stories/libraries/nativewind/Inputs/RadioButtonGroup.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),_slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react-native-css-interop/dist/runtime/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var RadioButtonGroup=(0,_react.forwardRef)((function(_ref,ref){var _ref$maxChoice=_ref.maxChoice,maxChoice=void 0===_ref$maxChoice?1:_ref$maxChoice,onSubmit=_ref.onSubmit,children=_ref.children,_ref$containerStyle=_ref.containerStyle,containerStyle=void 0===_ref$containerStyle?"":_ref$containerStyle,_ref$inactiveOutlineS=_ref.inactiveOutlineStyle,inactiveOutlineStyle=void 0===_ref$inactiveOutlineS?"dashed":_ref$inactiveOutlineS,_useState=(0,_react.useState)([]),_useState2=(0,_slicedToArray2.default)(_useState,2),selectedIds=_useState2[0],setSelectedIds=_useState2[1];return(0,_react.useImperativeHandle)(ref,(function(){return{submit:function submit(){onSubmit&&onSubmit(selectedIds)}}})),(0,_jsxRuntime.jsx)(_View.default,{className:containerStyle,children:_react.default.Children.map(children,(function(child,index){return _react.default.isValidElement(child)?_react.default.cloneElement(child,{isSelected:selectedIds.includes(index),onPress:function onPress(){return function handlePress(index){setSelectedIds((function(prevSelectedIds){return(prevSelectedIds.includes(index)?prevSelectedIds.filter((function(id){return id!==index})):prevSelectedIds.length<maxChoice?[].concat((0,_toConsumableArray2.default)(prevSelectedIds),[index]):[].concat((0,_toConsumableArray2.default)(prevSelectedIds.slice(1)),[index])).sort((function(a,b){return a-b}))}))}(index)},inactiveOutlineStyle}):child}))})}));exports.default=RadioButtonGroup;try{RadioButtonGroup.displayName="RadioButtonGroup",RadioButtonGroup.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{maxChoice:{defaultValue:{value:"1"},description:"",name:"maxChoice",required:!1,type:{name:"number"}},onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!1,type:{name:"((selectedIds: number[]) => void)"}},containerStyle:{defaultValue:{value:""},description:"",name:"containerStyle",required:!1,type:{name:"string"}},inactiveOutlineStyle:{defaultValue:{value:"dashed"},description:"",name:"inactiveOutlineStyle",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"LegacyRef<any>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/libraries/nativewind/Inputs/RadioButtonGroup.tsx#RadioButtonGroup"]={docgenInfo:RadioButtonGroup.__docgenInfo,name:"RadioButtonGroup",path:"stories/libraries/nativewind/Inputs/RadioButtonGroup.tsx#RadioButtonGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);