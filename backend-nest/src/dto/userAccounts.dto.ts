import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class UserAccountsDto {
    private _cardHolderName: string | null = null;
    private _entityName: string | null = null;
    private _expMonth: any | null = null;
    private _expYear: number | null = null;

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    accountType: string;
    
    @IsNotEmpty()
    securedKey: string;
    
    @IsOptional()
    set cardHolderName(value: string | null) {
        this._cardHolderName = value === '' ? null : value;
    }

    get cardHolderName() {
        return this._cardHolderName;
    }

    @IsOptional()
    set entityName(value: string | null) {
        this._entityName = value === '' ? null : value;
    }

    get entityName() {
        return this._entityName;
    }

    @IsOptional()
    accountNumber: string;

    @IsOptional()
    set expMonth(value: any | null) {
        this._expMonth = value === '' ? null : +value;
    }

    get expMonth() {
        return this._expMonth;
    }

    @IsOptional()
    set expYear(value: any | null) {
        this._expYear = value === '' ? null : +value;
    }

    get expYear() {
        return this._expYear;
    }
}