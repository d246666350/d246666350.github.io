import { router } from "./index";

router.beforeEach(async (to, from, next) => {
  if (to.path == "/lod" && from.path == "/home") {
    ZWJSBridge.close()
      .then((result) => {})
      .catch((error) => {});
    return;
  }
  document.title = to.meta.title;
  next();
});
