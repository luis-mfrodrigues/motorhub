import { useNavigate } from "react-router-dom";

function ProfileTabs() {
  const navigate = useNavigate();

  return (
    <div className="profile-tabs">
      <span onClick={() => navigate("/favorites")}>Favoritos</span>
      <span className="active">Perfil</span>
      <span onClick={() => navigate("/dashboard")}>Dashboard</span>
      <span onClick={() => navigate("/")}>Logout</span>
    </div>
  );
}

export default ProfileTabs;