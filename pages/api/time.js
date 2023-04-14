export default function Time(req, res) {
  let today = new Date();
  return res.status(200).json(today);
}
