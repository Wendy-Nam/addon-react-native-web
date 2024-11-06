(self.webpackChunk_storybook_addon_react_native_web=self.webpackChunk_storybook_addon_react_native_web||[]).push([[6315],{"./stories/libraries/nativewind/Modal/ModalExample.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.ModalType5Example=exports.ModalType4Example=exports.ModalType3Example=exports.ModalType2Example=exports.ModalType1Example=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _ModalExample=__webpack_require__("./stories/libraries/nativewind/Modal/ModalExample.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react-native-css-interop/dist/runtime/jsx-runtime.js");exports.default={title:"Modal/Example",parameters:{docs:{source:{type:"code"}},controls:{expanded:!0},default:null},parameters:{docs:{description:{component:"ModalLayout 관련 추가예제 (피그마대로)"}}}};(exports.ModalType1Example=function ModalType1Example(args){return(0,_jsxRuntime.jsx)(_ModalExample.ModalType1,{visible:!0,setVisible:function setVisible(){}})}).parameters={docs:{source:{code:"\nimport React from 'react';\nimport ModalLayout from '@components/ModalLayout';\nimport StylizedText from '@common/StylizedText';\nimport { RoundedTextButton } from '@common/RoundedButton';\n\n// ModalType1: 두 줄로 버튼 배치\nconst ModalType1: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {\n  const GalleryButton = (\n    <RoundedTextButton\n      content=\"갤러리에서 가져오기\"\n      widthOption=\"lg\"\n      color=\"bg-primary\"\n      onPress={handleButtonPress(() => console.log('갤러리에서 가져오기'), setVisible)}\n    />\n  );\n\n  const CameraButton = (\n    <RoundedTextButton\n      content=\"촬영하기\"\n      widthOption=\"lg\"\n      color=\"bg-primary\"\n      onPress={handleButtonPress(() => console.log('촬영하기'), setVisible)}\n    />\n  );\n\n  return (\n    <ModalLayout\n      visible={visible}\n      setVisible={setVisible}\n      rows={[{ content: [GalleryButton, CameraButton], layout: 'col' }]}\n    />\n  );\n};\n      "}}},(exports.ModalType2Example=function ModalType2Example(args){return(0,_jsxRuntime.jsx)(_ModalExample.ModalType2,{visible:!0,setVisible:function setVisible(){}})}).parameters={docs:{source:{code:'\n// ModalType2: 제목과 나란히 있는 두 개의 버튼\nconst ModalType2: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {\n  const CancelButton = (\n    <RoundedTextButton\n      content="취소"\n      color="bg-secondary"\n      widthOption="sm"\n      onPress={handleButtonPress(() => console.log(\'취소\'), setVisible)}\n    />\n  );\n\n  const FinishButton = (\n    <RoundedTextButton\n      content="종료"\n      color="bg-primary"\n      widthOption="sm"\n      onPress={handleButtonPress(() => console.log(\'종료\'), setVisible)}\n    />\n  );\n\n  return (\n    <ModalLayout\n      visible={visible}\n      setVisible={setVisible}\n      title="산책을 종료하시겠어요?"\n      rows={[{ content: [CancelButton, FinishButton], layout: \'row\' }]}\n    />\n  );\n};\n      '}}},(exports.ModalType3Example=function ModalType3Example(args){return(0,_jsxRuntime.jsx)(_ModalExample.ModalType3,{visible:!0,setVisible:function setVisible(){}})}).parameters={docs:{source:{code:'\n// ModalType3: 제목과 단일 버튼\nconst ModalType3: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {\n  const CancelButton = (\n    <RoundedTextButton\n      content="취소"\n      color="bg-primary"\n      widthOption="sm"\n      onPress={handleButtonPress(() => console.log(\'취소\'), setVisible)}\n    />\n  );\n\n  return (\n    <ModalLayout\n      visible={visible}\n      setVisible={setVisible}\n      title="오늘도 함께 산책해줘서 고마워요!"\n      rows={[{ content: [CancelButton], layout: \'col\' }]}\n    />\n  );\n};\n      '}}},(exports.ModalType4Example=function ModalType4Example(args){return(0,_jsxRuntime.jsx)(_ModalExample.ModalType4,{visible:!0,setVisible:function setVisible(){}})}).parameters={docs:{source:{code:'\n// ModalType4: 하단모달 + 설명 텍스트와 버튼 그룹 포함\nconst ModalType4: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {\n  const CancelButton = (\n    <RoundedTextButton\n      content="취소"\n      color="bg-secondary"\n      widthOption="sm"\n      onPress={handleButtonPress(() => console.log(\'취소\'), setVisible)}\n    />\n  );\n\n  const ConfirmButton = (\n    <RoundedTextButton\n      content="확인"\n      color="bg-primary"\n      widthOption="sm"\n      onPress={handleButtonPress(() => console.log(\'확인 클릭됨\'), setVisible)}\n    />\n  );\n\n  const DescriptionText = (\n    <StylizedText key="description" type="body2" styleClass="text-black">\n      여기에 설명 텍스트가 표시됩니다.\n    </StylizedText>\n  );\n\n  return (\n    <ModalLayout\n      visible={visible}\n      setVisible={setVisible}\n      position=\'bottom\'\n      title="여기에 설명 텍스트가 표시됩니다."\n      titleAlign=\'left\'\n      rows={[\n        {\n          content: [DescriptionText, <Avatar/>]\n        },\n        {\n          content: [CancelButton, ConfirmButton], layout: \'row\',\n        },\n      ]}\n    />\n  );\n};\n        '}}},(exports.ModalType5Example=function ModalType5Example(args){return(0,_jsxRuntime.jsx)(_ModalExample.ModalType5,{visible:!0,setVisible:function setVisible(){}})}).parameters={docs:{source:{code:'\n// ModalType5 : 하단 모달 + 투명한 배경\nconst ModalType5: React.FC<ModalWindowProps> = ({ visible, setVisible }) => {\n  const ExampleButton = (\n    <RoundedTextButton\n      content="취소"\n      color="bg-secondary"\n      widthOption="lg"\n      onPress={handleButtonPress(() => console.log(\'투명모달 버튼눌림\'), setVisible)}\n    />\n  );\n\n  return (\n    <ModalLayout\n      visible={visible}\n      setVisible={setVisible}\n      position=\'bottom\'\n      transparent // 배경 투명화 옵션\n      title="이건 배경이 투명한 모달임!"\n      titleAlign=\'left\'\n      rows={[\n        {\n          content: [ExampleButton, <Avatar/>]\n        },\n      ]}\n    />\n  );\n};\n        '}}},module.exports.__namedExportsOrder=["ModalType5Example","ModalType4Example","ModalType3Example","ModalType2Example","ModalType1Example"]}}]);