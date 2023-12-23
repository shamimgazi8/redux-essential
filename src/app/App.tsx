import Footer from "../../modules/Footer";
import Header from "../../modules/Header";

const App = ({ children }: any) => {
  return (
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
};
export default App;
