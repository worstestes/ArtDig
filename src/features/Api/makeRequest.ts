import request from "superagent";

export async function post(
  url: string,
  body?: Record<string, any>
): Promise<Record<string, any>> {
  return await new Promise((resolve, reject) => {
    if (body) {
      return request
        .post(url)
        .send(body)
        .end((err, res) => {
          if (res) resolve(res);
          else if (err) reject(err);
        });
    }
    return request.post(url).end((err, res) => {
      if (res) resolve(res);
      else if (err) reject(err);
    });
  });
}

export async function get(
  url: string,
  header: any
): Promise<Record<string, any>> {
  return await new Promise((resolve, reject) => {
    return request
      .get(url)
      .set("X-Xapp-Token", header)
      .then((res) => resolve(res.body))
      .catch((err) => reject(err));
  });
}
