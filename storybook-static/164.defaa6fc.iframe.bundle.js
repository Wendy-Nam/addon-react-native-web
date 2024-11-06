(self.webpackChunk_storybook_addon_react_native_web=self.webpackChunk_storybook_addon_react_native_web||[]).push([[164,1832],{"./tailwind.config.js":(module,__unused_webpack_exports,__webpack_require__)=>{var colors={primary:"#73A8BA",safe:"#73C38E",danger:"#EF5F5F",warning:"#EFAE5F",secondary:"#A3A3AC",lightgrey:"#F4F4F4",silver:"#D9D9D9",white:"#FFFFFF",black:"#000000",red:"#FF8A80",pink:"#FFAFA3",yellow:"#FFD966",orange:"#FFB74D",green:"#85E0A3",darkgreen:"#A3C488",skyblue:"#D7E8EE",blue:"#80CAFF",purple:"#C4A8FF",brown:"#C09999"},colorKeys=Object.keys(colors),tailwindConfig={content:["./stories/libraries/nativewind/**/*.{js,jsx,ts,tsx}"],safelist:[{pattern:new RegExp(`(bg|text|border)-(${colorKeys.join("|")})`)}],presets:[__webpack_require__("./node_modules/nativewind/dist/tailwind/index.js")],theme:{extend:{colors}}};module.exports=tailwindConfig,module.exports.colors=colors},"./stories/libraries/nativewind/Frames/BoxStyles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.getBoxStyles=exports.getBoxOutlnes=void 0;var _ColorMap=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./stories/libraries/nativewind/Utilities/ColorMap.tsx"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.getBoxOutlnes=function getBoxOutlnes(outline){switch(outline){case"solid":default:return{};case"dashed":return{borderStyle:"dashed",borderWidth:1,borderColor:_ColorMap.default.black+_ColorMap.OpacityMap[50]};case"dotted":return{borderStyle:"dotted",borderWidth:1.2,borderColor:_ColorMap.default.black+_ColorMap.OpacityMap[50]};case"active-solid":return{borderStyle:"solid",borderWidth:1.4,borderColor:_ColorMap.default.primary};case"inactive-solid":return{borderStyle:"solid",borderWidth:1.4,borderColor:_ColorMap.default.secondary+_ColorMap.OpacityMap[35]};case"inactive-dashed":return{borderStyle:"dashed",borderWidth:1.4,borderColor:_ColorMap.default.secondary+_ColorMap.OpacityMap[60]}}},exports.getBoxStyles=function getBoxStyles(preset){switch(preset){case"A":return{backgroundColor:"bg-white",borderStyle:"border border-gray-200 rounded-[24px]",containerLayout:"py-6 px-2"};case"B":return{backgroundColor:"bg-lightgrey",borderStyle:"rounded-[24px]",containerLayout:"p-4 my-1"};case"C":return{backgroundColor:"bg-white",borderStyle:"border border-3",containerLayout:"py-4 px-3 flex items-center justify-center"};case"modalC":return{backgroundColor:"bg-white",borderStyle:"rounded-[16px]",containerLayout:"w-80 mx-auto p-12 flex items-center justify-center"};case"modalB":return{backgroundColor:"bg-white",borderStyle:"rounded-t-[24px]",containerLayout:"w-full h-2/5 mx-auto px-12 py-6 flex items-center justify-bottom"};case"greycard":return{backgroundColor:"bg-lightgrey",borderStyle:"rounded-[24px]",containerLayout:"my-1 p-4"};case"dashedcard":return{backgroundColor:"bg-silver/10",borderStyle:"rounded-xl",containerLayout:"flex flex-col justify-center items-center text-center my-1 p-4"};case"flatcard":return{backgroundColor:"bg-white",borderStyle:"rounded-3xl",containerLayout:"my-1 p-6 max-h-28 max-w-full min-w-80"};case"flatcard-fit":return{backgroundColor:"bg-white",borderStyle:"rounded-3xl",containerLayout:"my-1 p-6 py-3.5 max-h-28 max-w-full min-w-80"};case"opaque-panel":return{backgroundColor:"bg-white opacity-50",borderStyle:"rounded-[16px]",containerLayout:"p-6"};default:return{backgroundColor:"bg-white",borderStyle:"border border-gray-200",containerLayout:"py-6 px-2"}}}},"./stories/libraries/nativewind/Utilities/ColorMap.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.OpacityMap=exports.ColorMap=exports.BarGroupColor=void 0;var customColors=__webpack_require__("./tailwind.config.js"),ColorMap=exports.ColorMap=customColors.colors;exports.OpacityMap={100:"FF",95:"F2",90:"E6",85:"D9",80:"CC",75:"BF",70:"B3",65:"A6",60:"99",55:"8C",50:"80",45:"73",40:"66",35:"59",30:"4D",25:"40",20:"33",15:"26",10:"1A",5:"0D",0:"00"},exports.BarGroupColor={walk:"green",rest:"red",steps:"yellow",sunlight:"purple",uvExposure:"blue",vitaminD:"orange"},exports.default=ColorMap},"?5580":()=>{},"?03fb":()=>{},"?6197":()=>{},"?b8cb":()=>{},"?c717":()=>{}}]);