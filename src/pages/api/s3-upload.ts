import { APIRoute, sanitizeKey } from "next-s3-upload";


export default APIRoute.configure({
    key(req, filename) {
        console.log(req.url)
        return `pdfs/${sanitizeKey(filename)}`;
    }
});

