export default {
  async fetch(req: Request) {
    const u = new URL(req.url);
    return new Response(u.toString());
  },
};
