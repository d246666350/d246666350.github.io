import service from "@/server/axios";

export const uploadImage = (data) =>
  service({
    url: "/common/upload",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
