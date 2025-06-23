export default defineAppConfig({
  ui: {
    colors: {
      primary: "green",
      neutral: "zinc",
    },
    breadcrumb: {
      variants: {
        active: {
          false: { link: "text-primary" },
          true: { link: "text-gray-400 font-medium" },
        },
      },
    },
  },
});
