const ErrorPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          marginBottom: '.7rem',
          borderBottom: '1px solid white',
          padding: '.2rem',
        }}
      >
        404
      </h1>
      <div>Page Does Not Exist</div>
    </div>
  );
};

export default ErrorPage;
