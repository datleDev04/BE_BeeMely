import { StatusCodes } from 'http-status-codes';
import ApiError from '../utils/ApiError.js';
import { getFilterOptions, getPaginationOptions } from '../utils/pagination.js';
import { Transformer } from '../utils/transformer.js';
import Label from '../models/Label.js';
import { checkRecordByField } from '../utils/CheckRecord.js';

export class LabelService {
  static getAllLabel = async (req) => { 
    const options = getPaginationOptions(req);
    const filter = getFilterOptions(req, ['name']);

    const paginatedLabels = await Label.paginate(filter, options);

    const { docs, ...otherFields } = paginatedLabels;

    const transformedLabels = docs.map((label) =>
      Transformer.transformObjectTypeSnakeToCamel(label.toObject())
    );

    const others = {
      ...otherFields,
    };

    return {
      metaData: Transformer.removeDeletedField(transformedLabels),
      others,
    }
  };

  static getOneLabel = async (req) => {
    await checkRecordByField(Label, '_id', req.params.id, true)
    const label = await Label.findById(req.params.id);
    return Transformer.transformObjectTypeSnakeToCamel(label.toObject())
  };

  static createLabel = async (req) => {
    const { name, description } = req.body;

    await checkRecordByField(Label, 'name', name, false)

    const newLabel = await Label.create({
      name,
      description,
    });
    return newLabel;
  };

  static updateLabelById = async (req) => {
    const { name, description } = req.body;

    await checkRecordByField(Label, 'name', name, false, req.params.id)

    await checkRecordByField(Label, '_id', req.params.id, true)

    const updatedLabel = await Label.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
      },
      {
        new: true,
      }
    );
      return updatedLabel;
  };

  static deleteLabelBydId = async (req) => {
    await checkRecordByField(Label, '_id', req.params.id, true)
    await Label.findByIdAndDelete(req.params.id);
  };
}
