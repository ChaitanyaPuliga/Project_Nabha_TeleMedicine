import { useState } from "react";
import Home from "./Home"
// Dummy component shown after login


export default function Auth() {
  const [page, setPage] = useState<"login" | "signup">("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // States for login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  // States for signup
  const [signupStep, setSignupStep] = useState(1);

  const handleLogin = () => {
    if (loginEmail === "admin" && loginPassword === "admin") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid credentials. Try admin / admin");
    }
  };

  if (isLoggedIn) return <Home/>;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {page === "login" ? (
        <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden w-[800px] h-[500px]">
          {/* Left form */}
          <div className="w-1/2 p-10">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <input
              type="text"
              placeholder="Email / ID"
              className="w-full p-3 mb-4 border rounded"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-3 rounded-lg"
            >
              Login
            </button>
            <p className="mt-4 text-sm">
              Don’t have an account?{" "}
              <button onClick={() => setPage("signup")} className="text-blue-600 underline">
                Signup
              </button>
            </p>
          </div>

          {/* Right illustration */}
          <div className="w-1/2 bg-blue-100 flex items-center justify-center">
          <video
  src="/doctor.mp4"   // replace with your video file / link
  autoPlay
  loop
  muted
  playsInline
  className="w-3/4 aspect-square rounded-lg object-cover shadow-md"
  onCanPlay={() => console.log("✅ Video is ready to play")}
  onPlay={() => console.log("▶️ Video started playing")}
  onError={(e) => console.error("❌ Error loading video", e)}
/>

          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-10 w-[500px]">
          <h2 className="text-2xl font-bold mb-6">Signup</h2>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className={`h-2 rounded-full ${
                signupStep === 1 ? "w-1/2 bg-blue-500" : "w-full bg-green-500"
              }`}
            ></div>
          </div>

          {signupStep === 1 && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-4 border rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 mb-4 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 mb-4 border rounded"
              />
              <button
                onClick={() => setSignupStep(2)}
                className="w-full bg-blue-500 text-white p-3 rounded-lg"
              >
                Next
              </button>
            </div>
          )}

          {signupStep === 2 && (
            <div>
              <input
                type="text"
                placeholder="Age"
                className="w-full p-3 mb-4 border rounded"
              />
              <input
                type="text"
                placeholder="Gender"
                className="w-full p-3 mb-4 border rounded"
              />
              <input
                type="text"
                placeholder="Health Condition / Notes"
                className="w-full p-3 mb-4 border rounded"
              />
              <button
                onClick={() => alert("Signup complete (dummy showcase)!")}
                className="w-full bg-green-500 text-white p-3 rounded-lg"
              >
                Submit
              </button>
            </div>
          )}

          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <button onClick={() => setPage("login")} className="text-blue-600 underline">
              Login
            </button>
          </p>
        </div>
      )}
    </div>
  );
}
