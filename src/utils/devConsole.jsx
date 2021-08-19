let tempConsole={}
for (let key of Object.keys(console)){
    tempConsole[key]=(process.env.REACT_APP_ENV==="development")?console[key]:()=>{}
}
const devConsole = tempConsole
export default devConsole 