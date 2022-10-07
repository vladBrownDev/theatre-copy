/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Album = {
  __typename?: 'Album';
  audio_files: UploadFileRelationResponseCollection;
  commerce: ComponentCommercialCommercialisation;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  talent_id?: Maybe<TalentProfileRelationResponseCollection>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AlbumAudio_FilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AlbumTalent_IdArgs = {
  filters?: InputMaybe<TalentProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AlbumEntity = {
  __typename?: 'AlbumEntity';
  attributes?: Maybe<Album>;
  id?: Maybe<Scalars['ID']>;
};

export type AlbumEntityResponse = {
  __typename?: 'AlbumEntityResponse';
  data?: Maybe<AlbumEntity>;
};

export type AlbumEntityResponseCollection = {
  __typename?: 'AlbumEntityResponseCollection';
  data: Array<AlbumEntity>;
  meta: ResponseCollectionMeta;
};

export type AlbumFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AlbumFiltersInput>>>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AlbumFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AlbumFiltersInput>>>;
  talent_id?: InputMaybe<TalentProfileFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AlbumInput = {
  audio_files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationInput>;
  description?: InputMaybe<Scalars['String']>;
  talent_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AlbumRelationResponseCollection = {
  __typename?: 'AlbumRelationResponseCollection';
  data: Array<AlbumEntity>;
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']>;
  commerce: ComponentCommercialCommercialisation;
  createdAt?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type ArticleDocumentsArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_id?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ArticleInput = {
  body?: InputMaybe<Scalars['String']>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationInput>;
  documents?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentCommercialCommercialisation = {
  __typename?: 'ComponentCommercialCommercialisation';
  id: Scalars['ID'];
  price?: Maybe<Scalars['Float']>;
  profit_type: Enum_Componentcommercialcommercialisation_Profit_Type;
};

export type ComponentCommercialCommercialisationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommercialCommercialisationFiltersInput>>>;
  not?: InputMaybe<ComponentCommercialCommercialisationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommercialCommercialisationFiltersInput>>>;
  price?: InputMaybe<FloatFilterInput>;
  profit_type?: InputMaybe<StringFilterInput>;
};

export type ComponentCommercialCommercialisationInput = {
  id?: InputMaybe<Scalars['ID']>;
  price?: InputMaybe<Scalars['Float']>;
  profit_type?: InputMaybe<Enum_Componentcommercialcommercialisation_Profit_Type>;
};

export type ComponentHomeHome = {
  __typename?: 'ComponentHomeHome';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentHomeHomeInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Componentcommercialcommercialisation_Profit_Type {
  Donation = 'donation',
  Free = 'free',
  Sale = 'sale'
}

export enum Enum_Partnerprofile_Partner_Type {
  Director = 'director',
  Talant = 'talant',
  Theatre = 'theatre'
}

export enum Enum_Talentprofile_Occupation {
  Actor = 'actor',
  Choreographer = 'choreographer',
  Director = 'director',
  LightArtist = 'light_artist',
  Musician = 'musician',
  Operator = 'operator',
  Photographer = 'photographer',
  Singer = 'singer',
  SoundArtist = 'sound_artist'
}

export enum Enum_Userrole_Name {
  Admin = 'admin',
  Manager = 'manager',
  Partner = 'partner',
  Spectator = 'spectator',
  Talent = 'talent'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GalleryPage = {
  __typename?: 'GalleryPage';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GalleryPageEntity = {
  __typename?: 'GalleryPageEntity';
  attributes?: Maybe<GalleryPage>;
  id?: Maybe<Scalars['ID']>;
};

export type GalleryPageEntityResponse = {
  __typename?: 'GalleryPageEntityResponse';
  data?: Maybe<GalleryPageEntity>;
};

export type GalleryPageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GenericMorph = Album | Article | ComponentCommercialCommercialisation | ComponentHomeHome | GalleryPage | HomePage | I18NLocale | Newspost | PartnerProfile | Photoshoot | Play | SpectatorProfile | TalentProfile | UploadFile | UploadFolder | UserRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Video;

export type HomePage = {
  __typename?: 'HomePage';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  section_a?: Maybe<ComponentHomeHome>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  section_a?: InputMaybe<ComponentHomeHomeInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAlbum?: Maybe<AlbumEntityResponse>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createNewspost?: Maybe<NewspostEntityResponse>;
  createPartnerProfile?: Maybe<PartnerProfileEntityResponse>;
  createPhotoshoot?: Maybe<PhotoshootEntityResponse>;
  createPlay?: Maybe<PlayEntityResponse>;
  createSpectatorProfile?: Maybe<SpectatorProfileEntityResponse>;
  createTalentProfile?: Maybe<TalentProfileEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createUserRole?: Maybe<UserRoleEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createVideo?: Maybe<VideoEntityResponse>;
  deleteAlbum?: Maybe<AlbumEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteGalleryPage?: Maybe<GalleryPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteNewspost?: Maybe<NewspostEntityResponse>;
  deletePartnerProfile?: Maybe<PartnerProfileEntityResponse>;
  deletePhotoshoot?: Maybe<PhotoshootEntityResponse>;
  deletePlay?: Maybe<PlayEntityResponse>;
  deleteSpectatorProfile?: Maybe<SpectatorProfileEntityResponse>;
  deleteTalentProfile?: Maybe<TalentProfileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUserRole?: Maybe<UserRoleEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteVideo?: Maybe<VideoEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAlbum?: Maybe<AlbumEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGalleryPage?: Maybe<GalleryPageEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateNewspost?: Maybe<NewspostEntityResponse>;
  updatePartnerProfile?: Maybe<PartnerProfileEntityResponse>;
  updatePhotoshoot?: Maybe<PhotoshootEntityResponse>;
  updatePlay?: Maybe<PlayEntityResponse>;
  updateSpectatorProfile?: Maybe<SpectatorProfileEntityResponse>;
  updateTalentProfile?: Maybe<TalentProfileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUserRole?: Maybe<UserRoleEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateVideo?: Maybe<VideoEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationCreateAlbumArgs = {
  data: AlbumInput;
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateNewspostArgs = {
  data: NewspostInput;
};


export type MutationCreatePartnerProfileArgs = {
  data: PartnerProfileInput;
};


export type MutationCreatePhotoshootArgs = {
  data: PhotoshootInput;
};


export type MutationCreatePlayArgs = {
  data: PlayInput;
};


export type MutationCreateSpectatorProfileArgs = {
  data: SpectatorProfileInput;
};


export type MutationCreateTalentProfileArgs = {
  data: TalentProfileInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUserRoleArgs = {
  data: UserRoleInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNewspostArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePartnerProfileArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePhotoshootArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePlayArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSpectatorProfileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTalentProfileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAlbumArgs = {
  data: AlbumInput;
  id: Scalars['ID'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGalleryPageArgs = {
  data: GalleryPageInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateNewspostArgs = {
  data: NewspostInput;
  id: Scalars['ID'];
};


export type MutationUpdatePartnerProfileArgs = {
  data: PartnerProfileInput;
  id: Scalars['ID'];
};


export type MutationUpdatePhotoshootArgs = {
  data: PhotoshootInput;
  id: Scalars['ID'];
};


export type MutationUpdatePlayArgs = {
  data: PlayInput;
  id: Scalars['ID'];
};


export type MutationUpdateSpectatorProfileArgs = {
  data: SpectatorProfileInput;
  id: Scalars['ID'];
};


export type MutationUpdateTalentProfileArgs = {
  data: TalentProfileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUserRoleArgs = {
  data: UserRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateVideoArgs = {
  data: VideoInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Newspost = {
  __typename?: 'Newspost';
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type NewspostEntity = {
  __typename?: 'NewspostEntity';
  attributes?: Maybe<Newspost>;
  id?: Maybe<Scalars['ID']>;
};

export type NewspostEntityResponse = {
  __typename?: 'NewspostEntityResponse';
  data?: Maybe<NewspostEntity>;
};

export type NewspostEntityResponseCollection = {
  __typename?: 'NewspostEntityResponseCollection';
  data: Array<NewspostEntity>;
  meta: ResponseCollectionMeta;
};

export type NewspostFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewspostFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NewspostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewspostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_id?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type NewspostInput = {
  body?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type NewspostRelationResponseCollection = {
  __typename?: 'NewspostRelationResponseCollection';
  data: Array<NewspostEntity>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type PartnerProfile = {
  __typename?: 'PartnerProfile';
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  fee_share?: Maybe<Scalars['Int']>;
  first_name: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  partner_type: Enum_Partnerprofile_Partner_Type;
  publishedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type PartnerProfileEntity = {
  __typename?: 'PartnerProfileEntity';
  attributes?: Maybe<PartnerProfile>;
  id?: Maybe<Scalars['ID']>;
};

export type PartnerProfileEntityResponse = {
  __typename?: 'PartnerProfileEntityResponse';
  data?: Maybe<PartnerProfileEntity>;
};

export type PartnerProfileEntityResponseCollection = {
  __typename?: 'PartnerProfileEntityResponseCollection';
  data: Array<PartnerProfileEntity>;
  meta: ResponseCollectionMeta;
};

export type PartnerProfileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PartnerProfileFiltersInput>>>;
  card_number?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  fee_share?: InputMaybe<IntFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PartnerProfileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PartnerProfileFiltersInput>>>;
  partner_type?: InputMaybe<StringFilterInput>;
  phone_number?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type PartnerProfileInput = {
  card_number?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  fee_share?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  partner_type?: InputMaybe<Enum_Partnerprofile_Partner_Type>;
  phone_number?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type Photoshoot = {
  __typename?: 'Photoshoot';
  commerce: ComponentCommercialCommercialisation;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type PhotoshootEntity = {
  __typename?: 'PhotoshootEntity';
  attributes?: Maybe<Photoshoot>;
  id?: Maybe<Scalars['ID']>;
};

export type PhotoshootEntityResponse = {
  __typename?: 'PhotoshootEntityResponse';
  data?: Maybe<PhotoshootEntity>;
};

export type PhotoshootEntityResponseCollection = {
  __typename?: 'PhotoshootEntityResponseCollection';
  data: Array<PhotoshootEntity>;
  meta: ResponseCollectionMeta;
};

export type PhotoshootFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PhotoshootFiltersInput>>>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PhotoshootFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PhotoshootFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_id?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PhotoshootInput = {
  commerce?: InputMaybe<ComponentCommercialCommercialisationInput>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type PhotoshootRelationResponseCollection = {
  __typename?: 'PhotoshootRelationResponseCollection';
  data: Array<PhotoshootEntity>;
};

export type Play = {
  __typename?: 'Play';
  commerce: ComponentCommercialCommercialisation;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  preview_photos?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<UsersPermissionsUserEntityResponse>;
  video: UploadFileEntityResponse;
};


export type PlayPreview_PhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PlayEntity = {
  __typename?: 'PlayEntity';
  attributes?: Maybe<Play>;
  id?: Maybe<Scalars['ID']>;
};

export type PlayEntityResponse = {
  __typename?: 'PlayEntityResponse';
  data?: Maybe<PlayEntity>;
};

export type PlayEntityResponseCollection = {
  __typename?: 'PlayEntityResponseCollection';
  data: Array<PlayEntity>;
  meta: ResponseCollectionMeta;
};

export type PlayFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PlayFiltersInput>>>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PlayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PlayFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_id?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type PlayInput = {
  commerce?: InputMaybe<ComponentCommercialCommercialisationInput>;
  description?: InputMaybe<Scalars['String']>;
  preview_photos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<Scalars['ID']>;
};

export type PlayRelationResponseCollection = {
  __typename?: 'PlayRelationResponseCollection';
  data: Array<PlayEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  album?: Maybe<AlbumEntityResponse>;
  albums?: Maybe<AlbumEntityResponseCollection>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  galleryPage?: Maybe<GalleryPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  newspost?: Maybe<NewspostEntityResponse>;
  newsposts?: Maybe<NewspostEntityResponseCollection>;
  partnerProfile?: Maybe<PartnerProfileEntityResponse>;
  partnerProfiles?: Maybe<PartnerProfileEntityResponseCollection>;
  photoshoot?: Maybe<PhotoshootEntityResponse>;
  photoshoots?: Maybe<PhotoshootEntityResponseCollection>;
  play?: Maybe<PlayEntityResponse>;
  plays?: Maybe<PlayEntityResponseCollection>;
  spectatorProfile?: Maybe<SpectatorProfileEntityResponse>;
  spectatorProfiles?: Maybe<SpectatorProfileEntityResponseCollection>;
  talentProfile?: Maybe<TalentProfileEntityResponse>;
  talentProfiles?: Maybe<TalentProfileEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  userRole?: Maybe<UserRoleEntityResponse>;
  userRoles?: Maybe<UserRoleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  video?: Maybe<VideoEntityResponse>;
  videos?: Maybe<VideoEntityResponseCollection>;
};


export type QueryAlbumArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAlbumsArgs = {
  filters?: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGalleryPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNewspostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryNewspostsArgs = {
  filters?: InputMaybe<NewspostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPartnerProfileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPartnerProfilesArgs = {
  filters?: InputMaybe<PartnerProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPhotoshootArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPhotoshootsArgs = {
  filters?: InputMaybe<PhotoshootFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPlayArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPlaysArgs = {
  filters?: InputMaybe<PlayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySpectatorProfileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySpectatorProfilesArgs = {
  filters?: InputMaybe<SpectatorProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTalentProfileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTalentProfilesArgs = {
  filters?: InputMaybe<TalentProfileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUserRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserRolesArgs = {
  filters?: InputMaybe<UserRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryVideoArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type SpectatorProfile = {
  __typename?: 'SpectatorProfile';
  createdAt?: Maybe<Scalars['DateTime']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  phone_number: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SpectatorProfileEntity = {
  __typename?: 'SpectatorProfileEntity';
  attributes?: Maybe<SpectatorProfile>;
  id?: Maybe<Scalars['ID']>;
};

export type SpectatorProfileEntityResponse = {
  __typename?: 'SpectatorProfileEntityResponse';
  data?: Maybe<SpectatorProfileEntity>;
};

export type SpectatorProfileEntityResponseCollection = {
  __typename?: 'SpectatorProfileEntityResponseCollection';
  data: Array<SpectatorProfileEntity>;
  meta: ResponseCollectionMeta;
};

export type SpectatorProfileFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SpectatorProfileFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SpectatorProfileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SpectatorProfileFiltersInput>>>;
  phone_number?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SpectatorProfileInput = {
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type TalentProfile = {
  __typename?: 'TalentProfile';
  albums?: Maybe<AlbumRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  facebook_url?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  instagram_url?: Maybe<Scalars['String']>;
  last_name: Scalars['String'];
  occupation: Enum_Talentprofile_Occupation;
  phone_number: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  study_history?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  work_history?: Maybe<Scalars['String']>;
};


export type TalentProfileAlbumsArgs = {
  filters?: InputMaybe<AlbumFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TalentProfileEntity = {
  __typename?: 'TalentProfileEntity';
  attributes?: Maybe<TalentProfile>;
  id?: Maybe<Scalars['ID']>;
};

export type TalentProfileEntityResponse = {
  __typename?: 'TalentProfileEntityResponse';
  data?: Maybe<TalentProfileEntity>;
};

export type TalentProfileEntityResponseCollection = {
  __typename?: 'TalentProfileEntityResponseCollection';
  data: Array<TalentProfileEntity>;
  meta: ResponseCollectionMeta;
};

export type TalentProfileFiltersInput = {
  albums?: InputMaybe<AlbumFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<TalentProfileFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  facebook_url?: InputMaybe<StringFilterInput>;
  first_name?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  instagram_url?: InputMaybe<StringFilterInput>;
  last_name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TalentProfileFiltersInput>;
  occupation?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<TalentProfileFiltersInput>>>;
  phone_number?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  study_history?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  work_history?: InputMaybe<StringFilterInput>;
};

export type TalentProfileInput = {
  albums?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  facebook_url?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  instagram_url?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Enum_Talentprofile_Occupation>;
  phone_number?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  study_history?: InputMaybe<Scalars['String']>;
  work_history?: InputMaybe<Scalars['String']>;
};

export type TalentProfileRelationResponseCollection = {
  __typename?: 'TalentProfileRelationResponseCollection';
  data: Array<TalentProfileEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UserRole = {
  __typename?: 'UserRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Enum_Userrole_Name>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UserRoleUser_IdArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UserRoleEntity = {
  __typename?: 'UserRoleEntity';
  attributes?: Maybe<UserRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UserRoleEntityResponse = {
  __typename?: 'UserRoleEntityResponse';
  data?: Maybe<UserRoleEntity>;
};

export type UserRoleEntityResponseCollection = {
  __typename?: 'UserRoleEntityResponseCollection';
  data: Array<UserRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UserRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UserRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UserRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UserRoleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_id?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UserRoleInput = {
  name?: InputMaybe<Enum_Userrole_Name>;
  user_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UserRoleRelationResponseCollection = {
  __typename?: 'UserRoleRelationResponseCollection';
  data: Array<UserRoleEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  articles?: Maybe<ArticleRelationResponseCollection>;
  avatar_url?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  newsposts?: Maybe<NewspostRelationResponseCollection>;
  partner_profile?: Maybe<PartnerProfileEntityResponse>;
  photoshoots?: Maybe<PhotoshootRelationResponseCollection>;
  plays?: Maybe<PlayRelationResponseCollection>;
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  spectator_profile?: Maybe<SpectatorProfileEntityResponse>;
  talent_profile?: Maybe<TalentProfileEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_role?: Maybe<UserRoleRelationResponseCollection>;
  username: Scalars['String'];
  videos?: Maybe<VideoRelationResponseCollection>;
};


export type UsersPermissionsUserArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserNewspostsArgs = {
  filters?: InputMaybe<NewspostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserPhotoshootsArgs = {
  filters?: InputMaybe<PhotoshootFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserPlaysArgs = {
  filters?: InputMaybe<PlayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserUser_RoleArgs = {
  filters?: InputMaybe<UserRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsUserVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  avatar_url?: InputMaybe<StringFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  newsposts?: InputMaybe<NewspostFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  partner_profile?: InputMaybe<PartnerProfileFiltersInput>;
  password?: InputMaybe<StringFilterInput>;
  photoshoots?: InputMaybe<PhotoshootFiltersInput>;
  plays?: InputMaybe<PlayFiltersInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  spectator_profile?: InputMaybe<SpectatorProfileFiltersInput>;
  talent_profile?: InputMaybe<TalentProfileFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_role?: InputMaybe<UserRoleFiltersInput>;
  username?: InputMaybe<StringFilterInput>;
  videos?: InputMaybe<VideoFiltersInput>;
};

export type UsersPermissionsUserInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  avatar_url?: InputMaybe<Scalars['String']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  newsposts?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  partner_profile?: InputMaybe<Scalars['ID']>;
  password?: InputMaybe<Scalars['String']>;
  photoshoots?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  plays?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  spectator_profile?: InputMaybe<Scalars['ID']>;
  talent_profile?: InputMaybe<Scalars['ID']>;
  user_role?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  username?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Video = {
  __typename?: 'Video';
  commerce: ComponentCommercialCommercialisation;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_id?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type VideoEntity = {
  __typename?: 'VideoEntity';
  attributes?: Maybe<Video>;
  id?: Maybe<Scalars['ID']>;
};

export type VideoEntityResponse = {
  __typename?: 'VideoEntityResponse';
  data?: Maybe<VideoEntity>;
};

export type VideoEntityResponseCollection = {
  __typename?: 'VideoEntityResponseCollection';
  data: Array<VideoEntity>;
  meta: ResponseCollectionMeta;
};

export type VideoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  commerce?: InputMaybe<ComponentCommercialCommercialisationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<VideoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user_id?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type VideoInput = {
  commerce?: InputMaybe<ComponentCommercialCommercialisationInput>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['ID']>;
};

export type VideoRelationResponseCollection = {
  __typename?: 'VideoRelationResponseCollection';
  data: Array<VideoEntity>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', title: string, section_a?: { __typename?: 'ComponentHomeHome', description?: string | null } | null } | null } | null } | null };


export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"section_a"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;