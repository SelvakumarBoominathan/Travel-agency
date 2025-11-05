import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin_layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("AllUsers", "routes/admin/all_users.tsx"),
  ]),
] satisfies RouteConfig;
