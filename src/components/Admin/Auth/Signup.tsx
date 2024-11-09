import { Button, Input } from "components/ui";
import "./GetStarted.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { SocketContext } from "socketContext";

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [meetingId, setMeetingId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const { callUser } = useContext<any>(SocketContext);

  const onSubmit = (e: any) => {
    e?.preventDefault?.();
    setErrorMessage("");
    if (!Boolean(meetingId?.length)) {
      setErrorMessage("Meeting link or ID is required");
    } else {
      // callUser(meetingId);
    }
  };

  return (
    <div className="get-started">
      <h1>Signup As An Admin!</h1>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="Enter Admin Email"
          type="email"
          name="email"
          onChange={setMeetingId}
          hasError={Boolean(errorMessage)}
          required
        />
        <Input
          placeholder="Enter Admin Password"
          type="password"
          name="password"
          onChange={setMeetingId}
          hasError={Boolean(errorMessage)}
          required
        />
        <Button text="Join" isLoading={loading} />
      </form>

      <div className="get-started__actions">
        <Button
          text="Or Start New Meeting"
          className="start_new"
          onClick={() => navigate("/team-login")}
        />
      </div>
    </div>
  );
};

export default Signup;
