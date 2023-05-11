import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tabs from '@mui/material/Tabs';
import Collapse from '@mui/material/Collapse';
import Tab from '@mui/material/Tab';
import grey from '@mui/material/colors/grey';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  EditorExpandMore,
  EditorTabPanel,
  HeaderEditor,
  QueryEditor,
  VariableEditor,
  useQueryEditor,
} from '@/entities/editor';

const a11yTabProps = (index: number) => {
  return {
    id: `editor-tab-${index}`,
    'aria-controls': `editor-tabpanel-${index}`,
  };
};

export const EditorContainer = (): JSX.Element => {
  const { queryCode, variableCode, headerCode, setQueryCode, setVariableCode, setHeaderCode } =
    useQueryEditor();
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setActiveTab(newValue);
    setExpanded(true);
  };

  const handleSetCode = (value: string) => {
    setQueryCode(value);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          display: 'grid',
          gridTemplateRows: '1fr auto auto',
          gridTemplateColumns: '1fr',
          height: '100%',
          width: '100%',
          gap: 0,
        }}
      >
        <Grid item xs sx={{ overflow: 'auto' }}>
          <QueryEditor code={queryCode} setCode={handleSetCode} />
        </Grid>
        <Grid
          item
          xs
          sx={{
            borderTop: `1px solid ${grey[200]}`,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleChangeTab}
            onClick={() => setExpanded(true)}
            TabIndicatorProps={{
              style: { display: 'none' },
            }}
            sx={{
              '& .MuiTab-root': {
                color: `${grey[500]} !important`,
                textTransform: 'capitalize',
              },
              '& .Mui-selected': { color: `${grey[700]} !important` },
            }}
          >
            <Tab label={t('editor.label-variable')} {...a11yTabProps(0)} />
            <Tab label={t('editor.label-header')} {...a11yTabProps(1)} />
          </Tabs>
          <EditorExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </EditorExpandMore>
        </Grid>
        <Grid item xs>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <EditorTabPanel value={activeTab} index={0}>
              <VariableEditor
                code={variableCode}
                setCode={(value: string) => setVariableCode(value)}
              />
            </EditorTabPanel>
            <EditorTabPanel value={activeTab} index={1}>
              <HeaderEditor code={headerCode} setCode={(value: string) => setHeaderCode(value)} />
            </EditorTabPanel>
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
};
