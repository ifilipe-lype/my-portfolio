import type { NextApiRequest, NextApiResponse } from 'next';

import data from "./static-data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json(data.skills)
}
