//コンポーネントの作成
function MyComponent(props: Props) {
  return (
    <div>
      props1 : {props.myPropsName1}
      props2 : {props.myPropsName2}
    </div>
  );
}

type Props = {
  myPropsName1: string,
  myPropsName2: number
};

//コンポーネントの描画
ReactDOM.render(
  <MyComponent myPropsName1="string" myPropsName2={1} />,
  document.getElementById("app")
);
