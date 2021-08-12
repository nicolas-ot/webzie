type Nullable<IdType, RequiredType> = RequiredType extends true
  ? IdType
  : IdType | null;

const Select = <IdType extends string, RequiredType extends boolean>(props: {
  options: Array<{ id: IdType; name: string }>;
  selectedItemId: Nullable<IdType, RequiredType>;
  onSelect: (id: Nullable<IdType, RequiredType>) => void;
  required?: RequiredType;
}) => (
  <select
    value={props.selectedItemId ?? 'NULL_SELECTION'}
    required={props.required}
    onChange={(e) => {
      const selectedId =
        e.target.value === 'NULL_SELECTION' ? null : e.target.value;
      props.onSelect(selectedId as Nullable<IdType, RequiredType>);
    }}
  >
    {!props.required && <option value='NULL_SELECTION'>None selected</option>}

    {props.options.map((option) => (
      <option key={option.id} value={option.id}>
        {option.name}
      </option>
    ))}
  </select>
);

export default Select;
