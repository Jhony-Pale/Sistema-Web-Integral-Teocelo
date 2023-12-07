import fs from "fs"
import { promisify } from "util"

const unlinkAsync = promisify(fs.unlink)

export const deletefile = async (file) => {
  await unlinkAsync(file.path)
};