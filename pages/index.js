export default function Home() {
  const statusInfo = "License verifications: 10, Pending Invitations: 2";
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Application Status</h1>
      <p>{statusInfo}</p>
    </div>
  );
}
