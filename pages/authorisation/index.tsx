import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useTranslation } from "next-i18next"
import * as el from "./styled"
import fbIncon from "../../public/assets/facebook.png"

const Login = () => {
    const CssTextField = styled(TextField)({
        width: 368,
        height: 32,
        "& .css-9j6mck-MuiFormLabel-root-MuiInputLabel-root": {
            "color": "rgba(246, 246, 246, 0.4);",
            "fontFamily": "Optima",
            "fontStyle": "normal",
            "fontWeight": "400",
            "fontSize": "16px",
            "lineHeight": "24px",
            marginLeft: 16
        },
        "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
            "color": "rgba(246, 246, 246, 0.4);",
            "fontFamily": "Optima",
            "fontStyle": "normal",
            "fontWeight": "400",
            "fontSize": "16px",
            "lineHeight": "24px",
        },
        "& .css-ijriqn-MuiInputBase-root-MuiInput-root:before": {
            "borderBottom": "1px solid rgba(246, 246, 246, 0.4);"
        },
        "& label.Mui-focused": {
          color: "rgba(246, 246, 246, 0.4);",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "rgba(246, 246, 246, 0.4);",
        },
      });
    const { t } = useTranslation(["common"])
    return (
            <el.MainWrapper>
                <el.LoginHead>
                    {t("Login with Theatre Universe")}
                </el.LoginHead>
                <CssTextField
                    label={`${t("Username or Email Address ")}`}
                    variant="standard"
                />
                <CssTextField 
                    label={t("Password")}
                    variant="standard" 
                    sx={{
                        "marginTop": "28px",
                    }}
                />
                <el.ForgotPassword>
                    Forgot your password?
                </el.ForgotPassword>
                <el.LoginButton>
                    Login
                </el.LoginButton>
                <div style={{ marginTop: 32 }}>
                    <el.RegisterText>
                        Not a Member?
                    </el.RegisterText>
                    <el.RegisterBut>
                        Register
                    </el.RegisterBut>
                </div>
                <div style={{ 
                    display:"flex",
                    justifyContent:"space-between",
                    width: 150,
                    marginTop: 24 }}>
                    <GoogleIcon sx={{ 
                        color: "rgba(246, 246, 246, 0.8);",
                        width:38, 
                        height:38 }} />
                    <a href="#">
                        <Image src={fbIncon}
                            alt="Facebook"
                            width={38}
                            height={38} />
                    </a>
                    <InstagramIcon sx={{ 
                        color: "rgba(246, 246, 246, 0.8);",
                        width:38, 
                        height:38 }} />
                </div>
            </el.MainWrapper>
        )
}

Login.getLayout = (page: React.ReactNode) => <div>{page}</div>


export default Login