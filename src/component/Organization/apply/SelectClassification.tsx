import React, { useState, useEffect, useRef } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

interface SelectClassificationProps {
  onChange: (
    campus: string,
    organization: string,
    classification: string,
    faculty: string,
    department: string
  ) => void;
}

interface OptionType {
  value: string;
  label: string;
}

interface SelectedOptions {
  campus: OptionType | null;
  organization: OptionType | null;
  classification: OptionType | null;
  faculty: OptionType | null;
  department: OptionType | null;
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.hasValue || state.menuIsOpen ? selectedBorder(state) : 'none',
    borderRadius: '10px',
    boxShadow: 'none',
    background: provided.background,
    cursor: 'pointer'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  singleValue: (provided) => ({
    ...provided,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  })
};

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {!props.selectProps.menuIsOpen && !props.selectProps.hasValue && (
          <i className='fas fa-angle-down'></i>
        )}
      </components.DropdownIndicator>
    )
  );
};

function selectedBorder(state) {
  if (state.hasValue && state.isFocused) {
    return '1px solid #858585';
  }
  return '1px solid #ccc';
}

function SelectClassification({ onChange }: SelectClassificationProps) {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    campus: { value: '', label: '캠퍼스 선택' },
    organization: { value: '', label: '단체 선택' },
    classification: { value: '', label: '상세 분류' },
    faculty: { value: '', label: '소속 대학' },
    department: { value: '', label: '학과 선택' }
  });

  const options: [string, string[]][] = [
    ['캠퍼스 선택', ['인문캠퍼스', '자연캠퍼스']],
    ['단체 선택', ['학생단체', '동아리/학회', '소모임']],
    [
      '상세 분류',
      [
        '준동아리',
        '중앙동아리',
        '학회',
        '총학생회',
        '총동아리연합회',
        '단과대 학생회',
        '과학생회'
      ]
    ],
    [
      '소속 대학',
      [
        '인문대학',
        '사회과학대학',
        '경영대학',
        '법과대학',
        'ICT융합대학',
        '미래융합대학',
        '자연과학대학',
        '공과대학',
        '예술체육대학',
        '건축대학',
        '국제학부'
      ]
    ],
    ['학과 선택', []] // 초기 값은 빈 배열로 시작
  ];

  const facultiesAndDepartments: Record<string, string[]> = {
    인문대학: [
      '국어국문학과',
      '중어중문학과',
      '일어일문학과',
      '영어영문학과',
      '사학과',
      '문헌정보학과',
      '아랍지역학과',
      '미술사학과',
      '철학과',
      '문예창작학과',
      '글로벌한국어학과',
      '글로벌아시아문화학과'
    ],
    사회과학대학: [
      '행정학과',
      '경제학과',
      '정치외교학과',
      '디지털미디어학과',
      '아동학과',
      '청소년지도학과'
    ],
    경영대학: ['경영학과', '국제통상학과', '경영정보학과', '부동산학과'],
    법과대학: ['법학과', '법무정책학과'],
    ICT융합대학: [
      '디지털콘텐츠디자인학과',
      '융합소프트웨어학부',
      '정보통신공학과'
    ],
    미래융합대학: [
      '창의융합인재학부',
      '사회복지학과',
      '부동산학과',
      '법무행정학과',
      '심리치료학과',
      '미래융합경영학과',
      '멀티디자인학과',
      '계약학과'
    ],
    자연과학대학: [
      '수학과',
      '물리학과',
      '화학과',
      '식품영양학과',
      '생명과학정보학과'
    ],
    공과대학: [
      '전기공학과',
      '전자공학과',
      '반도체공학과',
      '화학공학과',
      '신소재공학과',
      '환경에너지공학과',
      '컴퓨터공학과',
      '토목환경공학과',
      '교통공학과',
      '기계공학과',
      '산업경영공학과'
    ],
    예술체육대학: ['디자인학부', '스포츠학부', '바둑학과', '예술학부'],
    건축대학: ['건축학부'],
    국제학부: ['글로벌비즈니스전공']
  };

  const campusesAndFaculties: Record<string, string[]> = {
    인문캠퍼스: [
      '인문대학',
      '사회과학대학',
      '경영대학',
      '법과대학',
      'ICT융합대학',
      '미래융합대학'
    ],
    자연캠퍼스: [
      '자연과학대학',
      '공과대학',
      '예술체육대학',
      '건축대학',
      'ICT융합대학'
    ]
  };

  const ict융합대학Departments: Record<string, string[]> = {
    인문캠퍼스: ['디지털콘텐츠디자인학과', '융합소프트웨어학부'],
    자연캠퍼스: ['정보통신공학과']
  };

  const handleSelectChange = (
    option:
      | 'campus'
      | 'organization'
      | 'classification'
      | 'faculty'
      | 'department',
    selectedOption: OptionType | null
  ) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: selectedOption
    }));

    if (option === 'campus') {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        organization: { value: '', label: '단체 선택' },
        faculty: { value: '', label: '소속 대학' },
        department: { value: '', label: '학과 선택' }
      }));
    } else if (option === 'faculty') {
      let dynamicOptionValues: string[] = [];
      if (selectedOption?.value === 'ICT융합대학') {
        dynamicOptionValues =
          ict융합대학Departments[selectedOptions.campus?.value || ''] || [];
      } else {
        dynamicOptionValues =
          facultiesAndDepartments[selectedOptions.campus?.value || ''] || [];
      }
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        department: { value: '', label: '학과 선택' }
      }));
    }
  };
  const selectedCampusRef = useRef<string | null>(null);
  const selectedOrganizationRef = useRef<string | null>(null);
  const selectedClassificationRef = useRef<string | null>(null);
  const selectedFacultyRef = useRef<string | null>(null);
  const selectedDepartmentRef = useRef<string | null>(null);
  useEffect(() => {
    const selectedCampus = selectedOptions.campus?.value || '';
    const selectedOrganization = selectedOptions.organization?.value || '';
    const selectedClassification = selectedOptions.classification?.value || '';
    const selectedFaculty = selectedOptions.faculty?.value || '';
    const selectedDepartment = selectedOptions.department?.value || '';

    // 상태 변경이 있을 때에만 onChange 호출
    if (
      selectedCampus !== selectedCampusRef.current ||
      selectedOrganization !== selectedOrganizationRef.current ||
      selectedClassification !== selectedClassificationRef.current ||
      selectedFaculty !== selectedFacultyRef.current ||
      selectedDepartment !== selectedDepartmentRef.current
    ) {
      onChange(
        selectedCampus,
        selectedOrganization,
        selectedClassification,
        selectedFaculty,
        selectedDepartment
      );

      // 변경된 값을 업데이트
      selectedCampusRef.current = selectedCampus;
      selectedOrganizationRef.current = selectedOrganization;
      selectedClassificationRef.current = selectedClassification;
      selectedFacultyRef.current = selectedFaculty;
      selectedDepartmentRef.current = selectedDepartment;
    }

    console.log(
      selectedCampus,
      selectedClassification,
      selectedOrganization,
      selectedFaculty,
      selectedDepartment
    );
  }, [selectedOptions, onChange]);

  return (
    <Container>
      {options.map(([placeholder, optionValues], index) => {
        const selectedOptionKey = Object.keys(selectedOptions)[
          index
        ] as keyof SelectedOptions;

        let dynamicOptionValues: string[] = optionValues; // 초기에는 optionValues 사용

        if (selectedOptionKey === 'department') {
          dynamicOptionValues = selectedOptions.faculty
            ? facultiesAndDepartments[selectedOptions.faculty.value] || []
            : [];
        } else if (selectedOptionKey === 'faculty') {
          if (
            selectedOptions.campus &&
            selectedOptions.campus.value &&
            campusesAndFaculties[selectedOptions.campus.value]
          ) {
            dynamicOptionValues =
              campusesAndFaculties[selectedOptions.campus.value] || [];
          }
        }

        return (
          <SelectClass
            key={index}
            value={selectedOptions[selectedOptionKey]}
            onChange={(option) => handleSelectChange(selectedOptionKey, option)}
            options={dynamicOptionValues.map((option) => ({
              value: option,
              label: option
            }))}
            placeholder={
              selectedOptions[selectedOptionKey]?.label || placeholder
            }
            components={{ DropdownIndicator }}
            styles={customStyles}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 36px;
`;

const SelectClass = styled(Select)`
  width: 110px;
  height: 36px;
  margin-right: 6px;
  border: none;
  font-size: 12.6px;
`;

export default SelectClassification;
