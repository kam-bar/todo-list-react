export const ROUTES = {
    tasks: "/",
    author: "/author",
    task: (id = ":id") => `/task/${id}`,
};
