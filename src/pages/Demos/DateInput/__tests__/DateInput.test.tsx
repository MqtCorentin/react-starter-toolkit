import { clearString, renderWithWrapperStaticRouter } from 'shared/testsUtils';
import { MessageTypes } from '@axa-fr/react-toolkit-all';
import DateInputPage, { code } from '../DateInput';

describe('<DateInputPage />', () => {
  it('Should render DateInputPage', () => {
    const { asFragment } = renderWithWrapperStaticRouter(<DateInputPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('code', () => {
  const onChange = jest.fn();

  const defaultProps = {
    name: 'name-field',
    id: 'uniqueid',
    classModifier: 'required',
    className: 'row af-form__group',
    label: 'My Label',
    value: new Date(),
    helpMessage: 'Enter the date',
    placeholder: 'Ex: Samuel',
    message: '',
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    autoFocus: true,
    disabled: false,
    required: false,
    readOnly: false,
    isVisible: true,
    classNameContainerLabel: 'col-md-2',
    classNameContainerInput: 'col-md-10',
    helpButton: false,
    onChange,
  };

  it('Should render DateInputPage without help button', () => {
    const result = code(defaultProps);
    expect(clearString(result)).toEqual(
      clearString(`<DateInput required={${defaultProps.required}} 
      forceDisplayMessage={${defaultProps.forceDisplayMessage}} 
      disabled={${defaultProps.disabled}} 
      id="${defaultProps.id}" 
      message="${defaultProps.message}" 
      placeholder="${defaultProps.placeholder}" 
      helpMessage="${defaultProps.helpMessage}" 
      name="${defaultProps.name}" 
      value={value}
      label={<>${defaultProps.label}</>}
      className="${defaultProps.className}" 
      classModifier="${defaultProps.classModifier}" 
      messageType="${defaultProps.messageType}" 
      onChange={onChange('value')} 
      autoComplete="none"
      autoFocus={${defaultProps.autoFocus}} 
      readOnly={${defaultProps.readOnly}} 
      isVisible={${defaultProps.isVisible}} 
      classNameContainerLabel="${defaultProps.classNameContainerLabel}"
      classNameContainerInput="${defaultProps.classNameContainerInput}"
      ></DateInput>  
    `),
    );
  });

  it('Should render DateInputPage with help button', () => {
    const result = code({ ...defaultProps, helpButton: true });
    expect(clearString(result)).toEqual(
      clearString(`<DateInput required={${defaultProps.required}} 
      forceDisplayMessage={${defaultProps.forceDisplayMessage}} 
      disabled={${defaultProps.disabled}} 
      id="${defaultProps.id}" 
      message="${defaultProps.message}" 
      placeholder="${defaultProps.placeholder}" 
      helpMessage="${defaultProps.helpMessage}" 
      name="${defaultProps.name}" 
      value={value}
      label={<>${defaultProps.label}</>}
      className="${defaultProps.className}" 
      classModifier="${defaultProps.classModifier}" 
      messageType="${defaultProps.messageType}" 
      onChange={onChange('value')} 
      autoComplete="none"
      autoFocus={${defaultProps.autoFocus}} 
      readOnly={${defaultProps.readOnly}} 
      isVisible={${defaultProps.isVisible}} 
      classNameContainerLabel="${defaultProps.classNameContainerLabel}"
      classNameContainerInput="${defaultProps.classNameContainerInput}"
      >
      <HelpButton>tooltip avec du text</HelpButton>
      </DateInput>  
    `),
    );
  });
});
