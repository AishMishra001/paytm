import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import UserSection from "../components/UserSection"

function Dashboard() {
  return (
    <div className="text-black">
      <Appbar user={'Aish'} userImage={'A'}></Appbar>
      <Balance Balance={"$2000"}></Balance>
      <UserSection User={'Harkirat Singh'} UserImage={"H"}></UserSection>
    </div>
  )
}

export default Dashboard