import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("throwing error");
    throw new Error("This is a test error");
    res.status(200).json({ name: "John Doe" });
}

export { handler as GET };
