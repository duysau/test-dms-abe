import { Status } from "models/Status";
import { Model } from "react-3layer-common";

export class Organization extends Model {
  public id?: number;

  public code?: string;

  public name?: string;

  public parentId?: number;

  public path?: string;

  public level?: number;

  public statusId?: number;

  public phone?: string;

  public email?: string;

  public address?: string;

  public rowId?: string;

  public parent?: Organization;

  public status?: Status;
}
