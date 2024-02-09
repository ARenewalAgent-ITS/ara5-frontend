export const REG_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const REG_URL =
  /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;

export const REG_GOOGLE_DRIVE_URL =
  /^(http(s)?:\/\/drive\.google\.com\/.*|[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$)/;

export const REG_PHONE =
  /^(\+62)?[\s-]?8[1-9]{1}\d{1}[\s-]?\d{4}[\s-]?\d{2,5}$/;

export const REG_ADDRESS = /^[A-Za-z0-9\s.,'-]+$/;

export const REG_STRONG_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const REG_FULL_NAME = /^[A-Za-z\s'-]+$/;

export const REG_SHORT_NAME = /^[A-Za-z\s]+$/;

export const REG_GENERAL = /^[A-Za-z\s'-]+$/;

export const REG_NISN = /^\d{10}$/;
