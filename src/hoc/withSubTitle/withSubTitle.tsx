const withSubTitle = (Component: React.FC<any>, subTitle: string): React.FC => {
  return (props) => (
    <div>
      <h2 style={{ fontSize: '2.8em' }}>{subTitle}</h2>
      <Component {...props}></Component>
    </div>
  );
};

export default withSubTitle;
