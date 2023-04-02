import PropTypes from 'prop-types';
import React from 'react';
import { FormFieldSet, FormInput, PatchEvent, setIfMissing } from 'sanity';


class CallToAction extends React.PureComponent {
  firstFieldInput = React.createRef();

  handleFieldChange = (field, fieldPatchEvent) => {
    const { onChange, type } = this.props;
    onChange(fieldPatchEvent.prefixAll(field.name).prepend(setIfMissing({ _type: type.name })));
  }

  componentDidMount = () => {
    const { onChange, value, type } = this.props;
    if (!value) {
      onChange(PatchEvent.from(setIfMissing({ _type: type.name, hasCta: false, linkType: 'Internal' })));
    }
  }

  focus() {
    this.firstFieldInput.current.focus();
  }

  render() {
    const { type, value, level, focusPath, onFocus, onBlur } = this.props;

    const showFields = fieldName => {
      if (fieldName === 'hasCta') {
        return true;
      } if (fieldName === 'backgroundColor') {
        return value && value.callToActionType === 'button';
      }
      return value && value.hasCta;
    };

    return (
      <FormFieldSet
        level={level}
        legend={type.title}
        description={type.description}
        isCollapsible={!!type.options && !!type.options.collapsible}
        isCollapsed={!!type.options && !!type.options.collapsed}
      >
        <div>
          {type.fields
            .filter(field => showFields(field?.name))
            .map((field, i) => (
              <FormInput
                level={level + 1}
                ref={i === 0 ? this.firstFieldInput : null}
                key={field.name}
                type={field.type}
                value={value && value[field.name]}
                onChange={patchEvent => this.handleFieldChange(field, patchEvent)}
                path={[field.name]}
                focusPath={focusPath}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            ))}
        </div>
      </FormFieldSet>
    );
  }
}

CallToAction.propTypes = {
  type: PropTypes.shape.isRequired,
  level: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.any).isRequired,
  focusPath: PropTypes.arrayOf.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default CallToAction;
