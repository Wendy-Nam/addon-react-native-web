(self.webpackChunk_storybook_addon_react_native_web=self.webpackChunk_storybook_addon_react_native_web||[]).push([[4071,5555,5732],{"./stories/libraries/nativewind/Frames/BalloonBox.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_BalloonBox=_interopRequireDefault(__webpack_require__("./stories/libraries/nativewind/Frames/BalloonBox.tsx")),_StylizedText=_interopRequireDefault(__webpack_require__("./stories/libraries/nativewind/Utilities/StylizedText.tsx")),_jsxRuntime=__webpack_require__("./node_modules/react-native-css-interop/dist/runtime/jsx-runtime.js");exports.default={title:"Frames/BalloonBox",component:_BalloonBox.default,parameters:{docs:{description:{component:"<b>파일 위치: @common/BalloonBox</b> \n\n말풍선모양 프레임. 내용으로 텍스트2개를 그냥 넣으면 간격이 벌어지니, 그 세트를 각각의 View로 감싸길 권장함 (하단 코드 참조)"}}}};(exports.Default=function Template(args){return(0,_jsxRuntime.jsx)(_BalloonBox.default,Object.assign({},args,{children:(0,_jsxRuntime.jsxs)(_View.default,{children:[(0,_jsxRuntime.jsx)(_StylizedText.default,{type:"header4",styleClass:"text-black mb-2",children:"댕댕이란?"}),(0,_jsxRuntime.jsx)(_StylizedText.default,{type:"body2",styleClass:"text-black",children:"이 단어는 강아지를 뜻하는 신조어이다."})]})}))}.bind({})).args={children:"This is a sample message in a balloon box."},module.exports.__namedExportsOrder=["Default"]},"./stories/libraries/nativewind/Frames/BalloonBox.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react-native-css-interop/dist/runtime/jsx-runtime.js"),BalloonBox=function BalloonBox(_ref){var children=_ref.children;return(0,_jsxRuntime.jsxs)(_View.default,{className:"bg-skyblue mt-4 mb-5 px-10 py-10 rounded-2xl relative",children:[(0,_jsxRuntime.jsx)(_View.default,{style:{position:"absolute",top:-10,left:20,width:0,height:0,borderLeftWidth:10,borderRightWidth:10,borderBottomWidth:10,borderLeftColor:"transparent",borderRightColor:"transparent",borderBottomColor:"#D7E8EE"}}),(0,_jsxRuntime.jsx)(_View.default,{className:"flex space-y-10",children})]})};exports.default=BalloonBox;try{BalloonBox.displayName="BalloonBox",BalloonBox.__docgenInfo={description:"",displayName:"BalloonBox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/libraries/nativewind/Frames/BalloonBox.tsx#BalloonBox"]={docgenInfo:BalloonBox.__docgenInfo,name:"BalloonBox",path:"stories/libraries/nativewind/Frames/BalloonBox.tsx#BalloonBox"})}catch(__react_docgen_typescript_loader_error){}},"./stories/libraries/nativewind/Utilities/StylizedText.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStyles=exports.default=exports.HeaderText=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react-native-css-interop/dist/runtime/jsx-runtime.js"),StylizedText=function StylizedText(_ref){var _ref$type=_ref.type,type=void 0===_ref$type?"body1":_ref$type,children=_ref.children,styleClass=_ref.styleClass,styles=getStyles(type);return(0,_jsxRuntime.jsx)(_Text.default,{className:styleClass,style:styles,children})},HeaderText=exports.HeaderText=function HeaderText(_ref2){var text=_ref2.text,_ref2$highlight=_ref2.highlight,highlight=void 0===_ref2$highlight?"":_ref2$highlight,parts=text.split(highlight);return(0,_jsxRuntime.jsx)(_Text.default,{className:"my-2 mb-4 ml-2 text-xl",style:getStyles("header1"),children:parts.map((function(part,index){return(0,_jsxRuntime.jsxs)(_Text.default,{className:"text-black",style:getStyles("header1"),children:[part,index<parts.length-1&&(0,_jsxRuntime.jsx)(_Text.default,{className:"text-primary",children:highlight})]},index)}))})},getStyles=exports.getStyles=function getStyles(type){switch(type){case"header1":return{fontFamily:"Pretendard-Bold",fontSize:22};case"header2":return{fontFamily:"Pretendard-Bold",fontSize:16};case"header3":case"body2":return{fontFamily:"Pretendard-Medium",fontSize:12};case"header4":return{fontFamily:"Pretendard-Black",fontSize:18};case"header5":return{fontFamily:"Pretendard-SemiBold",fontSize:18};case"header6":return{fontFamily:"Pretendard-Bold",fontSize:18};case"header7":return{fontFamily:"Pretendard-ExtraBold",fontSize:18};case"body1":return{fontFamily:"Pretendard-Medium",fontSize:14};case"body3":return{fontFamily:"Pretendard-Medium",fontSize:10};case"caption-title":return{fontFamily:"Pretendard-Medium",fontSize:15};case"caption-label":return{fontFamily:"Pretendard-Regular",fontSize:10.5};case"label":return{fontFamily:"Pretendard-Regular",fontSize:9};case"label1":return{fontFamily:"Pretendard-Bold",fontSize:9};case"label2":return{fontFamily:"Pretendard-Medium",fontSize:11};case"label3":return{fontFamily:"Pretendard-Bold",fontSize:11};case"label4":return{fontFamily:"Pretendard-Bold",fontSize:6};case"record1":return{fontFamily:"Pretendard-Bold",fontSize:13};case"record2":return{fontFamily:"Pretendard-Medium",fontSize:13};default:return{fontFamily:"Pretendard-Regular",fontSize:14}}};exports.default=StylizedText;try{HeaderText.displayName="HeaderText",HeaderText.__docgenInfo={description:"",displayName:"HeaderText",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},highlight:{defaultValue:{value:""},description:"",name:"highlight",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/libraries/nativewind/Utilities/StylizedText.tsx#HeaderText"]={docgenInfo:HeaderText.__docgenInfo,name:"HeaderText",path:"stories/libraries/nativewind/Utilities/StylizedText.tsx#HeaderText"})}catch(__react_docgen_typescript_loader_error){}try{getStyles.displayName="getStyles",getStyles.__docgenInfo={description:"",displayName:"getStyles",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number | undefined) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions | undefined): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\nMatches a string or an object that supports being matched against, and returns an array\ncontaining the results of that search, or null if no matches are found.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\n@param matcher An object that supports being matched against.",name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nPasses a string and {@linkcode replaceValue} to the `[Symbol.replace]` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.\nReplaces text in a string, using an object that supports replacement within a string.\n@param searchValue A string or regular expression to search for.\n@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.\n@param searchValue An object that supports searching for and replacing matches within a string.\n@param replaceValue The replacement text.\n@param searchValue A object can search for and replace matches within a string.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.\n@param searcher An object which supports searching within a string.",name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\nIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number | undefined, end?: number | undefined) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.\n@param splitter An object that can split a string.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\nIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number | undefined) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"{ (locales?: string | string[] | undefined): string; (locales?: LocalesArgument): string; }"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@deprecated A legacy feature for browser compatibility\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number | undefined) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\nthe String resulting from converting this object to a String.\nIf there is no element at that position, the result is undefined.\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.",name:"codePointAt",required:!0,type:{name:"(pos: number) => number | undefined"}},includes:{defaultValue:null,description:"Returns true if searchString appears as a substring of the result of converting this\nobject to a String, at one or more positions that are\ngreater than or equal to position; otherwise, returns false.\n@param searchString search string\n@param position If position is undefined, 0 is assumed, so as to search all of the String.",name:"includes",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},endsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nendPosition – length(this). Otherwise returns false.",name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number | undefined) => boolean"}},normalize:{defaultValue:null,description:'Returns the String value result of normalizing the string into the normalization form\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"\n@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default\nis "NFC"',name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string | undefined): string; }'}},repeat:{defaultValue:null,description:"Returns a String value that is made from count copies appended together. If count is 0,\nthe empty string is returned.\n@param count number of copies to append",name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:"Returns true if the sequence of elements of searchString converted to a String is the\nsame as the corresponding elements of this object (converted to a String) starting at\nposition. Otherwise returns false.",name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number | undefined) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the start (left) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},padEnd:{defaultValue:null,description:'Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.\nThe padding is applied from the end (right) of the current string.\n@param maxLength The length of the resulting string once the current string has been padded.\nIf this parameter is smaller than the current string\'s length, the current string will be returned as it is.\n@param fillString The string to pad the current string with.\nIf this string is too long, it will be truncated and the left-most part will be applied.\nThe default value for this parameter is " " (U+0020).',name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string | undefined) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:"Matches a string with a regular expression, and returns an iterable of matches\ncontaining the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>"}},"__@iterator@105":{defaultValue:null,description:"Iterator",name:"__@iterator@105",required:!0,type:{name:"() => StringIterator<string>"}},at:{defaultValue:null,description:"",name:"at",required:!0,type:{name:"(index: number) => string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/libraries/nativewind/Utilities/StylizedText.tsx#getStyles"]={docgenInfo:getStyles.__docgenInfo,name:"getStyles",path:"stories/libraries/nativewind/Utilities/StylizedText.tsx#getStyles"})}catch(__react_docgen_typescript_loader_error){}try{StylizedText.displayName="StylizedText",StylizedText.__docgenInfo={description:"",displayName:"StylizedText",props:{type:{defaultValue:{value:"body1"},description:"",name:"type",required:!1,type:{name:"string"}},styleClass:{defaultValue:null,description:"",name:"styleClass",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/libraries/nativewind/Utilities/StylizedText.tsx#StylizedText"]={docgenInfo:StylizedText.__docgenInfo,name:"StylizedText",path:"stories/libraries/nativewind/Utilities/StylizedText.tsx#StylizedText"})}catch(__react_docgen_typescript_loader_error){}}}]);