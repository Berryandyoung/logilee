export default async function handler(req, res) {
  return res.status(501).json({
    error: "Tracking API is not configured.",
    message: "Move provider credentials to a server-side environment before enabling live tracking."
  });
}
