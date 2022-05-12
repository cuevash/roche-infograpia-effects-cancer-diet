// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2kS349DKMK4UC7Q38aQg2a
// Component: Hf8FgXjwfF19Z
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import CopyableLink from "../../CopyableLink"; // plasmic-import: tZQoxUpqeyq1G/component

import { useScreenVariants as useScreenVariantshv0J0QdwsjmnK } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Hv0J0qdwsjmnK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_minimalist_about_me_page.module.css"; // plasmic-import: 2kS349DKMK4UC7Q38aQg2a/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Hf8FgXjwfF19Z/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: VdI3NtFoDINBV/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: 9DBIIc5P4uOIU/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: O1GqunhAx_w99/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  copyableLink?: p.Flex<typeof CopyableLink>;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshv0J0QdwsjmnK()
  });

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__liTDi)}>
            <div className={classNames(projectcss.all, sty.freeBox__a2DEs)} />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___0GAai)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___6NlBs)}>
                <div className={classNames(projectcss.all, sty.freeBox__jBbQ)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9DMnu
                    )}
                  >
                    {"Anna Wu103"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wmgOc
                    )}
                  >
                    {
                      "Building things for building things.\nDesign and code at Plasmic."
                    }
                  </div>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__glxOl)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0UcJm
                  )}
                >
                  {" "}
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__o8X9)}>
                  <CopyableLink
                    data-plasmic-name={"copyableLink"}
                    data-plasmic-override={overrides.copyableLink}
                    className={classNames("__wab_instance", sty.copyableLink)}
                  >
                    {"aw@gmail.com"}
                  </CopyableLink>
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ed1Q4)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__eYdPm)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__ejao3
                      )}
                      component={Link}
                      href={"https://www.twitter.com" as const}
                      platform={"nextjs"}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg___1XbSe)}
                        role={"img"}
                      />
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__yxVfO
                      )}
                      component={Link}
                      href={"https://www.dribbble.com" as const}
                      platform={"nextjs"}
                    >
                      <Icon2Icon
                        className={classNames(projectcss.all, sty.svg__gbQ4W)}
                        role={"img"}
                      />
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__rRqHh
                      )}
                      component={Link}
                      href={"https://www.github.com" as const}
                      platform={"nextjs"}
                    >
                      <Icon3Icon
                        className={classNames(projectcss.all, sty.svg___1UXi9)}
                        role={"img"}
                      />
                    </p.PlasmicLink>
                  </p.Stack>
                </p.Stack>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__zF)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "copyableLink"],
  copyableLink: ["copyableLink"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  copyableLink: typeof CopyableLink;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    copyableLink: makeNodeComponent("copyableLink"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
