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

export const ImageSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 1 * 1024 * 1024, {
    message: "Ảnh phải nhỏ hơn 1MB",
  })
  .refine(
    (file) =>
      ["image/jpeg", "image/png", "image/webp"].includes(file.type),
    {
      message: "Chỉ chấp nhận JPG, PNG, WEBP",
    }
  );
export const AvatarSchema = z.object({
  avatar: ImageSchema,
});
export const ProfileSchema = z.object({
    name: z.string().trim().min(3, 'Tên người dùng phải ≥ 3 ký tự'),
    email: z.string().trim().email('Email không hợp lệ'),
    phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số định danh phải 10 ký tự'),
    birthday: z.string().trim().min(1, 'Ngày sinh không được để trống'),
})

export const LocationSchema = z.object({
    name: z.string().trim().min(3, 'Tên vị trí phải ≥ 3 ký tự'),
    nation: z.string().trim().min(3, 'Tên quốc gia phải ≥ 3 ký tự'),
    country: z.string().trim().min(3, 'Tên tỉnh thành phải ≥ 3 ký tự'),
})

export const RoomSchema = z.object({
    name: z.string().trim().min(3, 'Tên phòng phải ≥ 3 ký tự'),
    quantity: z
        .coerce
        .number()
        .min(1, "Số khách phải lớn hơn 0")
        .max(3, "Số khách tối đa 3 người"),
    roomNumber: z
      .coerce
      .number()
      .min(1, "Số phòng ngủ phải lớn hơn 0")
      .max(3, "Số phòng ngủ tối đa 3 người"),
    bedNumber: z
        .coerce
        .number()
        .min(1, "Số phòng ngủ phải lớn hơn 0")
        .max(3, "Số phòng ngủ tối đa 3 người"),
    bathNumber: z
       .coerce
        .number()
        .min(1, "Số phòng tắm phải lớn hơn 0")
        .max(3, "Số phòng tắm tối đa 3 người"),
    description: z
        .string().trim()
        .min(3, "Mô tả tối thiểu 3 ký tự"),
    price: z
       .coerce
        .number()
        .min(1, "Giá tiền không hợp lệ"),
    wash: z.coerce.boolean(),
    iron: z.coerce.boolean(),
    tv:z.coerce.boolean(),
    air: z.coerce.boolean(),
    wifi: z.coerce.boolean(),
    cook: z.coerce.boolean(),
    park:z.coerce.boolean(),
    pool: z.coerce.boolean(),
    locationId: z.coerce
        .number()
        .min(1, "Vui lòng chọn vị trí"),
})

            