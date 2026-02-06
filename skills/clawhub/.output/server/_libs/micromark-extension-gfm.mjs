import { c as combineExtensions } from "./_DLD8nrUX.mjs";
import { g as gfmAutolinkLiteral } from "./_BtR1BC-4.mjs";
import { g as gfmFootnote } from "./_C5wlOzO8.mjs";
import { g as gfmStrikethrough } from "./_kK7t0GEl.mjs";
import { g as gfmTable } from "./micromark-extension-gfm-table.mjs";
import { g as gfmTaskListItem } from "./_Dcm35_vt.mjs";
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable(),
    gfmTaskListItem()
  ]);
}
export {
  gfm as g
};
