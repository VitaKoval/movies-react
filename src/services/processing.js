export const poster = poster_path => {
  return poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : `https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=`;
};
