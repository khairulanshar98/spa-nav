import AppBar from "./components/AppBar";
// @ts-ignore
import { Hooks } from "@khairul/api"

export default function Root(props) {
  
  return (
    <Hooks.Provider>
      <AppBar {...props} />
    </Hooks.Provider>
  );
}
