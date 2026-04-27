import { z } from 'zod'

export const CommentSchema = z.object({
    content: z.string().trim().min(5, 'Nội dung bình luận ít nhất 5 ký tự').max(500, 'Nội dung bình luận nhieu nhất 500 ký tự'),}
);
export const LoginSchema = z.object({
    email: z.string().trim().email('Email không hợp lệ'),
    password: z.string().regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    "Mật khẩu phải ≥ 6 ký tự, gồm chữ hoa, chữ thường và số")
})
export const RegisterSchema = z.object({
    name: z.string().trim().min(3, 'Tên người dùng phải ≥ 3 ký tự'),
    email: z.string().trim().email('Email không hợp lệ'),
    password: z.string().regex( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    "Mật khẩu phải ≥ 6 ký tự, gồm chữ hoa, chữ thường và số"),
    phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số định danh phải 10 ký tự'),
    birthday: z.string().trim().min(1, 'Ngày sinh không được để trống'),
})