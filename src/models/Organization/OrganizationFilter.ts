import {
  GuidFilter,
  IdFilter,
  NumberFilter,
  StringFilter,
} from "react-3layer-advance-filters";
import { ModelFilter } from "react-3layer-common";

export class OrganizationFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public code?: StringFilter = new StringFilter();
  public name?: StringFilter = new StringFilter();
  public parentId?: IdFilter = new IdFilter();
  public path?: StringFilter = new StringFilter();
  public level?: NumberFilter = new NumberFilter();
  public statusId?: IdFilter = new IdFilter();
  public phone?: StringFilter = new StringFilter();
  public email?: StringFilter = new StringFilter();
  public address?: StringFilter = new StringFilter();
  public rowId?: GuidFilter = new GuidFilter();
}
