import { z } from 'zod'

export const CommentSchema = z.object({
    content: z.string().trim().min(5, 'Nội dung bình luận ít nhất 5 ký tự').max(500, 'Nội dung bình luận nhieu nhất 500 ký tự'),}
);