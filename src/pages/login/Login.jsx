import React from "react";
import Wrapper from "../../components/Wrapper";
import Header from "../../components/Header";
import CardComponent from "../../components/CardComponent";
import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../components/UseForm";

const initializeValue = {
  registeredEmail: "",
  verificationEmail: "",
};
function Login(props) {
  const { values, handleInputChange } = useForm(initializeValue);
  return (
    <>
      <Wrapper>
        <Header />
        <div className="h-screen w-full md:flex justify-center items-center">
          <CardComponent>
            <div className="flex flex-col">
              <Form>
                <Controls.Input
                  className="disable-input-bg p-2 border border-black"
                  label="登録のメールアドレスに認証メールを送信します"
                  name="verificationEmail"
                  value="ya●●●●●●●●●●●@●●●●●●●●●●om"
                  values={values.verificationEmail}
                  onChange={handleInputChange}
                  disabled
                />
                <Controls.Input
                  label="本人確認のため登録のメールアドレスを全て入力し送信ボタンを押してください"
                  name="registeredEmail"
                  values={values.registeredEmail}
                  onChange={handleInputChange}
                />
                <Controls.Button
                  errorLabel="error message will be here..."
                  text="送信"
                />
              </Form>
            </div>
          </CardComponent>
        </div>
      </Wrapper>
    </>
  );
}

export default Login;
