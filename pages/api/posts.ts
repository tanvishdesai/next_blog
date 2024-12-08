import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = fs.readFileSync(postsFilePath, 'utf8');
            const posts: string[] = JSON.parse(data || '[]');
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ error: 'Error reading posts' });
        }
    } else if (req.method === 'POST') {
        const { content } = req.body as { content: string };
        if (!content) return res.status(400).json({ error: 'Content is required' });

        try {
            const data = fs.readFileSync(postsFilePath, 'utf8');
            const posts: string[] = JSON.parse(data || '[]');
            posts.push(content);

            fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
            res.status(201).json({ message: 'Post added' });
        } catch (error) {
            res.status(500).json({ error: 'Error saving post' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
