import { Type } from 'class-transformer';
import { IsArray, IsString, ValidateNested } from 'class-validator';

export class HeaderDataDto {
  @IsString()
  CompanyCode: string;

  @IsString()
  BranchCode: string;

  @IsString()
  UnitCode: string;

  @IsString()
  DataSource: string;

  @IsString()
  AnalysisType: string;

  @IsString()
  Time: string;

  @IsString()
  Day: string;

  @IsString()
  Month: string;

  @IsString()
  Year: string;

  @IsString()
  AnalyticalMethod: string;

  @IsString()
  AnalyticalTask: string;

  @IsString()
  Grade: string;

  @IsString()
  TypeStandard: string;

  @IsString()
  RunsDone: string;

  @IsString()
  RunsInAverage: string;

  @IsString()
  RunNumber: string;

  @IsString()
  RunType: string;

  @IsString()
  SID1: string;

  @IsString()
  SID2: string;

  @IsString()
  SID3: string;

  @IsString()
  SID4: string;

  @IsString()
  SID5: string;

  @IsString()
  SID6: string;

  @IsString()
  SID7: string;

  @IsString()
  SID8: string;

  @IsString()
  SID9: string;

  @IsString()
  SID10: string;

  @IsString()
  NumberOfElement: string;
}

export class ElementDataDto {
  @IsString()
  ElementName: string;

  @IsString()
  ElementFlag: string;

  @IsString()
  LowerGrade: string;

  @IsString()
  UpperGrade: string;

  @IsString()
  InternalLowerGrade: string;

  @IsString()
  InternalUpperGrade: string;

  @IsString()
  ElementValue: string;
}

export class CreateQclabDto {
  @ValidateNested()
  @Type(() => HeaderDataDto)
  headerData: HeaderDataDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ElementDataDto)
  elementData: ElementDataDto[];
}
