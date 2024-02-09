import * as yup from "yup";
import { regexUrl } from "~/common/regex";
import { type IPayloadProject, type IProject } from "~/store/interfaces";
import { useProjectStore } from "~/store/project";
const useFormNewProject = () => {
  const projectStore = useProjectStore();
  const { categories } = storeToRefs(projectStore);

  const projectImagePreview = ref<string>("");
  const socialInputs = ref<{ id: number; value: string; title: string }[]>([]);
  const optionListSocialPlatform: { title: string }[] = [
    { title: "Github" },
    { title: "Instagram" },
    { title: "LinkedIn" },
    { title: "Behance" },
  ];

  const searchTechValue = ref<string>("");
  const openTechnologyList = ref<boolean>(false);
  const technologiesValue = ref<{ id: string; title: string }[]>([]);

  const technologiesData = ref<{ id: string; title: string }[]>([
    {
      id: "htmlid",
      title: "HTML",
    },
    {
      id: "cssid",
      title: "CSS",
    },
    {
      id: "jsid",
      title: "Javascript",
    },
    {
      id: "reactid",
      title: "React",
    },
  ]);
  const technologiesClone = [...technologiesData.value];

  const handleSearchTech = (title: string) => {
    searchTechValue.value = title;
  };

  const handleAddTechnology = (id: string, title: string) => {
    technologiesData.value = technologiesData.value.filter(
      (item) => item.title !== title,
    );
    searchTechValue.value = "";
    technologiesValue.value = [...technologiesValue.value, { id, title }];
  };

  const handleRemoveTechnology = (tech: { id: string; title: string }) => {
    const techExist = technologiesClone.findIndex(
      (item) => item.id === tech.id,
    );
    console.log("techExist", techExist);
    if (techExist !== -1) {
      const _technologies = [
        ...technologiesData.value,
        { id: tech.id, title: tech.title },
      ];
      technologiesData.value = _technologies;
    }

    technologiesValue.value = [...technologiesValue.value].filter(
      (item) => item.id !== tech.id,
    );
  };

  const { handleSubmit, defineField, errors, values, setValues } =
    useForm<IPayloadProject>({
      initialValues: {
        title: "",
        description: "",
        image: null,
        category: {},
        socials: [],
        technologies: [],
      },
      validationSchema: {
        title: yup.string().required("Title is required"),
        description: yup.string(),
        category: yup.object().shape({
          id: yup.string().required("Category is required"),
          type: yup.string().required("Category is required"),
        }),
        image: yup.mixed().required("Image project is required"),
        socials: yup.array(),
        technologies: yup.array().of(yup.string()),
      },
    });
  const [title, titleProps] = defineField("title");
  const [description, descriptionProps] = defineField("description");
  const [category, categoryProps] = defineField("category");
  const [image, imageProps] = defineField("image");
  const [socials, socialsProps] = defineField("socials");
  const errorsSocial = ref<{ id: number; title?: string; url?: string }>({
    id: 0,
    title: "",
    url: "",
  });
  const handleChangeImage = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setValues({
        image: files[0],
      });

      projectImagePreview.value = URL.createObjectURL(files[0]);
    }
  };

  const handleValidateSocialLink = (inputId: number, value: string) => {
    if (!value) {
      errorsSocial.value = {
        id: inputId,
        url: "Url is required",
      };
      return false;
    }

    const isValid = regexUrl.test(value);
    if (!isValid) {
      errorsSocial.value = {
        id: inputId,
        url: "Url miss format",
      };
      return false;
    } else {
      errorsSocial.value = {
        id: 0,
        url: "",
      };
      return true;
    }
  };

  const handleGetAllCategories = async () => {
    try {
      await projectStore.getAllCategories();
    } catch (error) {
      return error;
    }
  };

  const handleCreateProject = handleSubmit(async (values) => {
    const formData = new FormData();
    formData.append("image", values.image ?? "");
    try {
      // **** Validate when has input length > 0 ****
      if (socialInputs.value.length > 0) {
        for (const input of socialInputs.value) {
          if (!input.value) {
            errorsSocial.value = {
              id: input.id,
              url: "Url is required",
            };
            return;
          }
        }
      }

      const payload: IPayloadProject = {
        ...values,
        socials: socialInputs.value.map((item) => ({
          title: item.title,
          url: item.value,
        })),
        technologies: technologiesValue.value.map((item) => item.title),
      };
      const newProject: IProject = await projectStore.createNewProject(payload);
      await projectStore.uploadFile(newProject.id, formData);
    } catch (error) {
      console.log("Error", error);
    }
  });
  const handleOpenTechnologyList = () => {
    openTechnologyList.value = false;
  };
  onMounted(() => {
    handleGetAllCategories();
    window.addEventListener("click", handleOpenTechnologyList);
  });

  onUnmounted(() => {
    window.removeEventListener("click", handleOpenTechnologyList);
  });

  return {
    title,
    titleProps,
    description,
    descriptionProps,
    category,
    categoryProps,
    categories,
    image,
    imageProps,
    socials,
    socialsProps,
    optionListSocialPlatform,
    projectImagePreview,
    values,
    errors,
    socialInputs,
    errorsSocial,
    technologiesData,
    searchTechValue,
    openTechnologyList,
    technologiesValue,
    handleRemoveTechnology,
    handleSearchTech,
    handleAddTechnology,
    handleCreateProject,
    handleValidateSocialLink,
    handleChangeImage,
  };
};

export default useFormNewProject;
